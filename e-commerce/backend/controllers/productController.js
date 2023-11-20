var express = require('express');
var router = express.Router();
const { PrismaClient } = require("../prisma/generated/client");
const prisma = new PrismaClient()

// const productController = {
//   getAllAdmin: async (req, res) => {
//     const admins = await prisma.admin.findMany();
//     res.json({ admins });
//   },
// };

const productController = {
    getAllProduct: async (req, res) => {
        const products = await prisma.product.findMany();
        res.json(products || {});
    },

    getByID: async (req, res) => {
        const param = req.params.id
        try {
            const id = parseInt(param)
            const product = await prisma.product.findUnique({ where: {product_id:id } });
            return res.json(product || {});
        } catch (e) {
            res.status(400).json({ message: "id must be a number" })

        };

    }
}
module.exports = productController;   
