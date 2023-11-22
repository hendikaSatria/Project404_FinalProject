// loginController.js
const { PrismaClient } = require("../../prisma/generated/client");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { serialize, parse } = require('cookie');

const prisma = new PrismaClient();

async function loginController(req, res) {
  try {
    const { username, password } = req.body;

    // Cari admin berdasarkan username
    const admin = await prisma.admin.findFirst({
      where: { username },
    });

    // Periksa apakah admin ditemukan dan password sesuai
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Buat token JWT
    const token = jwt.sign({ adminId: admin.admin_id }, 'your-secret-key', {
      expiresIn: '1d',
    });

    // Buat cookie yang berisi token
    const serialized = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    // Kirim respons dengan token dan set-cookie header
    res.status(200).json({ token }).header('Set-Cookie', serialized);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function registerController(req, res) {
  try {
    const { username, password } = req.body;

    // Hash password sebelum menyimpannya
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan admin baru ke database
    const newAdmin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'Admin registered successfully', admin: newAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function logoutController(req, res) {
  // Hapus cookie dengan nama 'token'
  const serialized = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  });

  // Kirim respons dengan menghapus cookie
  res.status(200).header('Set-Cookie', serialized).json({ message: 'Logout successful' });
}

module.exports = {
  loginController,
  registerController,
  logoutController,
};
