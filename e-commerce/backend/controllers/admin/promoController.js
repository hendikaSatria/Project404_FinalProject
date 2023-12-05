const { PrismaClient } = require("../../prisma/generated/client");
const prisma = new PrismaClient();

const promoController = {
  //Create promo
  createPromo: async (req, res) => {
    try {
      const { type, amount, maximum_usage, promo_code } = req.body;
      const remaining_usage = maximum_usage
      const promotion = await prisma.promotion.create({
        data: {
          type,
          amount,
          maximum_usage,
          promo_code,
          remaining_usage,
          admin_id: 1, //Harus sesuai admin
        },
      });
      console.log("New data :", req.body);
      res.status(201).json(promotion);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  },

  //Get all promo
  getAllPromo: async (req, res) => {
    try {
      const promotion = await prisma.promotion.findMany();
      res.json(promotion);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  },

  // Get promo by id
  getPromoById: async (req, res) => {
    const { id } = req.params;
    try {
      const promotion = await prisma.promotion.findUnique({
        where: { promo_id: parseInt(id) },
      });

      if (!promotion) {
        return res.status(404).json({ message: "Promotion not found." });
      }

      res.status(200).json(promotion);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  },

  //Update promo
  updatePromo: async (req, res) => {
    const { id } = req.params;
    const { type, maximum_usage, amount, remaining_usage, product_id, promo_code } =
      req.body;

    try {
      console.log("Updated:", req.body);
      const promotion = await prisma.promotion.update({
        where: { promo_id: parseInt(id) },
        data: {
          type,
          maximum_usage,
          amount,
          remaining_usage,
          product_id,
          promo_code,
        },
      });
      res.status(200).json(promotion);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  },

  //Delete promo
  deletePromo: async (req, res) => {
    const { id } = req.params;
    try {
      const promotion = await prisma.promotion.delete({
        where: { promo_id: parseInt(id) },
      });
      res.status(204).json({ message: "Successfully deleted" });
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  },
};

module.exports = promoController;
