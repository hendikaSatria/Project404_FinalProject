const { PrismaClient } = require("../../prisma/generated/client");
const prisma = new PrismaClient();

const getProducts = async (req, res) => {
    const { page = 1, limit = 12 } = req.query;

    try {
        const products = await prisma.product.findMany({
            take: +limit,
            skip: (+page - 1) * +limit,
        });

        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        console.error('Error fetching all products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProductById = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await prisma.product.findUnique({
            where: { product_id: +productId },
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getTotalProducts = async (req, res) => {
    try {
        const totalProducts = await prisma.product.count();
        res.json({ totalProducts });
    } catch (error) {
        console.error('Error fetching total products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    getTotalProducts,
    getAllProducts
};
