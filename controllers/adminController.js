const { PrismaClient } = require("../prisma/generated/client");
const prisma = new PrismaClient();

const adminController = {
  getAllAdmin: async (req, res) => {
    const admins = await prisma.admin.findMany();
    res.json({ admins });
  },
};

module.exports = adminController;
