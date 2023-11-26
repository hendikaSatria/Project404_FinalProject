const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require("../prisma/generated/client");
const prisma = new PrismaClient();

function generateAffiliateCode(length) {
  const characters = '0123456789';
  let code = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}

const registerUser = async (req, res) => {
    const { full_name, password, email } = req.body;
  
    try {
      // Check if a user with the provided email already exists
      const existingUser = await prisma.user.findFirst({
        where: { email },
      });
  
      if (existingUser) {
        return res.status(400).json({ message: "Email is already in use" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      let affiliateCode;
      let isCodeUnique = false;
  
      // Loop the affiliate code generator until its one of a kind
      while (!isCodeUnique) {
        affiliateCode = generateAffiliateCode(6);
        const userWithCode = await prisma.user.findFirst({
          where: { affiliate_code: affiliateCode },
        });
  
        // Generate trhe affiliate cdoe
        isCodeUnique = !userWithCode;
      }
  
      const user = await prisma.user.create({
        data: {
          full_name,
          password: hashedPassword,
          email,
          affiliate_code: affiliateCode,
          affiliate_usage: false,
        },
      });
  
      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

  const loginUser = async (req, res) => {
    try {
      const { password, email } = req.body;
      const user = await prisma.user.findFirst({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET || 'your-default-secret');
      res.json({ token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  const logoutUser = async (req, res) => {
    try {
      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  
  const viewProfile = async (req, res) => {
    try {
      const userId = req.user.userId; 
  
      // Retrieve the user profile information from the database
      const userProfile = await prisma.user.findFirst({
        where: { user_id: userId },
        include: {
          user_addresses: true,
        },
      });
  
      if (!userProfile) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ user_profile: userProfile });
    } catch (error) {
      console.error('View profile error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
const updateAddress = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { province_id, province_name, city_id, city_name, postal_code } = req.body;

    // Find the user existing address
    const existingAddress = await prisma.userAddress.findFirst({
      where: {
        user_id: userId,
      },
    });

    // If the user has an existing address, update it if not create a new one
    const updatedAddress = existingAddress
      ? await prisma.userAddress.update({
          where: {
            user_address_id: existingAddress.user_address_id,
          },
          data: {
            province_id,
            province_name,
            city_id,
            city_name,
            postal_code,
            updated_at: new Date(),
          },
        })
      : await prisma.userAddress.create({
          data: {
            user_id: userId,
            province_id,
            province_name,
            city_id,
            city_name,
            postal_code,
          },
        });

    res.json({ user_address: updatedAddress, message: 'Address updated successfully' });
  } catch (error) {
    console.error('Update address error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  updateAddress,
  viewProfile,
};

