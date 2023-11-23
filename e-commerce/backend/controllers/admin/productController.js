const { PrismaClient } = require("../../prisma/generated/client");
const prisma = new PrismaClient()


const productController = {
    getAllProduct: async (req, res) => {
        const products = await prisma.product.findMany();
        res.json(products || {});
    },

    getByID: async (req, res) => {
        const param = req.params.id
        try {
            const id = parseInt(param)
            const product = await prisma.product.findUnique({ 
                where: {product_id:id } 
            });
            res.json(product || {});
        } catch (err) {
            res.status(400).json({ message: "id must be a number" })

        };
    },

    addProducts: async (req, res) => {
        try {
            const { name, description, price, stock, is_available, image, weight} =
                req.body;
            const product = await prisma.products.create({
                data: {
                    name,
                    description,
                    price: parseInt(price),
                    stock: parseInt(stock),
                    image,
                    weight: parseInt(weight),
                    create_at: new Date(),
                },
            });
            res
                .status(201)
                .json({ message: "Products data succesfully added"})
        } catch(err){
            console.log(err);
            res.status(400).json({ message: "Something went wrong"})
        }
    },

    editProducts: async(req, res) =>{
        try {
            const { id } = req.params;
            const { name, description, price, stock, is_available, image, weight} = 
                req.body;
            const products = await prisma.product.update({
                where : { product_id: Number(id)},
                data: {
                    name,
                    description,
                    price: parseInt(price),
                    stock: parseInt(stock),
                    image,
                    weight: parseInt(weight),
                    update_at: new Date(),
                },
            });
            res
                .status(201)
                .json({messaage: "Product data succesfully updated"})
        } catch(err){
            res.status(400).json({ message: "Something went wrong"})
        }
    },

    deleteProducts: async (req, res) =>{
        try {
            const {id} = req.params;
            const product = await prisma.product.delete({
                where: {
                    product_id: Number(id),
                },
            });
            res
                .status(200)
                .json({ message: "Product succesfullly deleted"})
        } catch(err){
            console.log(err);
            res.status(400).json({ message: "Something went wrong"});
        }
    },
};
module.exports = productController;   
