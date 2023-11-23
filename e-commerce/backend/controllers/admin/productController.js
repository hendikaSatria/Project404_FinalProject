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
            const product = await prisma.product.findUnique({ where: {product_id:id } });
            return res.json(product || {});
        } catch (e) {
            res.status(400).json({ message: "id must be a number" })

        };

    },

    createProduct: async (req, res) => {
        try {
            if (!req.file) return res.status(400).json({ message: "Please upload the image" });
        
            const { name, description, price, stock, is_available, category_id, warehouse_id, weight } = req.body;
            const intStock = parseInt(stock);
            const intPrice = parseInt(price);
            const intWeight = parseInt(weight);
        
            const product = await prisma.product.create({
              data: {
                name: name,
                description: description,
                price: intPrice,
                stock: intStock,
                is_available: is_available,
                category_id: category_id,
                warehouse_id: warehouse_id,
                image: req.file.filename,
                weight: intWeight,
              },
            });
        
            res.json(product);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
          }
        },
        
        updateProduct: async (req, res) => {
            try {
              const { id } = req.params;
              const { name, description, price, stock, is_available, category_id, warehouse_id, weight } = req.body;
              const intStock = parseInt(stock);
              const intPrice = parseInt(price);
              const intWeight = parseInt(weight);
          
              const updatedProduct = await prisma.product.update({
                where: {
                  product_id: parseInt(id),
                },
                data: {
                  name: name,
                  description: description,
                  price: intPrice,
                  stock: intStock,
                  is_available: is_available,
                  category_id: category_id,
                  warehouse_id: warehouse_id,
                  weight: intWeight,
                },
              });
          
              res.json(updatedProduct);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: "Internal Server Error" });
            }
          },
          
          deleteProduct: async (req, res) => {
            try {
              const { id } = req.params;
          
              const deletedProduct = await prisma.product.delete({
                where: {
                  product_id: parseInt(id),
                },
              });
          
              res.json(deletedProduct);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: "Internal Server Error" });
            }
          }

}
module.exports = productController;   
