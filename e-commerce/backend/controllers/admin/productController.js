const { PrismaClient } = require("../../prisma/generated/client");
const prisma = new PrismaClient();

const productController = {
  getAllProduct: async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products || {});
  },

  getByID: async (req, res) => {
    const param = req.params.id;
    try {
      const id = parseInt(param);
      const product = await prisma.product.findUnique({
        where: { product_id: id },
      });
      return res.json(product || {});
    } catch (e) {
      res.status(400).json({ message: "id must be a number" });
    }
  },

  createProduct: async (req, res) => {
    try {
      // Validasi apakah kategori sudah ada
      const { category_name, warehouse_name } = req.body;
      const category = await prisma.category.findUnique({
        where: { category_name },
      });

      // Validasi apakah gudang sudah ada
      const warehouse = await prisma.warehouse.findFirst({
        where: {
          warehouse_name: warehouse_name,
        },
      });

      if (!category || !warehouse) {
        return res.status(400).json({ message: "Category or warehouse not found" });
      }

      if (!req.file) {
        return res.status(400).json({ message: "Please upload the image" });
      }

      const {
        name,
        description,
        price,
        stock,
        is_available,
        weight,
      } = req.body;

      const intStock = parseInt(stock);
      const intPrice = parseInt(price);
      const intWeight = parseInt(weight);
      const isAvailableBoolean = is_available.toLowerCase() === "true";

      const product = await prisma.product.create({
        data: {
          name: name,
          description: description,
          price: intPrice,
          stock: intStock,
          is_available: isAvailableBoolean,
          category_id: category.category_id,
          warehouse_id: warehouse.warehouse_id,
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
      const {
        name,
        description,
        price,
        stock,
        is_available,
        category_name,
        warehouse_name,
        weight,
      } = req.body;
      const intStock = parseInt(stock);
      const numericPrice = parseFloat(price);
      const intWeight = parseInt(weight);
  
      const isAvailableBoolean =
        typeof is_available === "string"
          ? is_available.toLowerCase() === "true"
          : typeof is_available === "boolean"
          ? is_available
          : undefined;
  
      // Dapatkan produk yang ingin diperbarui beserta kategori dan gudangnya
      const existingProduct = await prisma.product.findUnique({
        where: {
          product_id: parseInt(id),
        },
        include: {
          category: true,
          warehouse: true,
        },
      });
  
      if (!existingProduct) {
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      }
  
      // Dapatkan kategori yang sudah ada berdasarkan category_name
      let existingCategory;
      if (category_name !== undefined) {
        existingCategory = await prisma.category.findUnique({
          where: { category_name },
        });
      } else {
        // Gunakan kategori yang sudah ada sebelumnya jika category_name tidak diberikan
        existingCategory = existingProduct.category;
      }
  
      // Dapatkan gudang yang sudah ada berdasarkan warehouse_name
      const existingWarehouse = await prisma.warehouse.findFirst({
        where: {
          warehouse_name,
        },
      });
  
      if (!existingCategory || !existingWarehouse) {
        return res
          .status(400)
          .json({ message: "Category atau warehouse tidak ditemukan" });
      }
  
      let updatedProduct;
  
      if (req.file) {
        // Jika ada file gambar baru, perbarui juga gambar
        updatedProduct = await prisma.product.update({
          where: {
            product_id: parseInt(id),
          },
          data: {
            name,
            description,
            price: numericPrice,
            stock: intStock,
            is_available: isAvailableBoolean,
            category: {
              connect: {
                category_name: existingCategory.category_name,
              },
            },
            warehouse: {
              connect: {
                warehouse_id: existingWarehouse.warehouse_id,
              },
            },
            weight: intWeight,
            image: req.file.filename,
          },
        });
      } else {
        // Jika tidak ada file gambar baru, hanya perbarui informasi produk lainnya
        updatedProduct = await prisma.product.update({
          where: {
            product_id: parseInt(id),
          },
          data: {
            name,
            description,
            price: numericPrice,
            stock: intStock,
            is_available: isAvailableBoolean,
            category: {
              connect: {
                category_name: existingCategory.category_name,
              },
            },
            warehouse: {
              connect: {
                warehouse_id: existingWarehouse.warehouse_id,
              },
            },
            weight: intWeight,
          },
        });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Kesalahan Server Internal" });
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
  },

  getByCategory: async (req, res) => {
    try {
      const { category_id } = req.params;
      const products = await prisma.product.findMany({
        where: {
          category_id: parseInt(category_id),
        },
      });
      res.json(products || {});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getAllProductDetails: async (req, res) => {
    try {
      const productDetails = await prisma.product.findMany({
        include: {
          category: { select: { category_name: true } },
          warehouse: { select: { warehouse_name: true } },
        },
      });

      res.json(productDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  searchProductByName: async (req, res) => {
    try {
      const { productName } = req.params;
      const products = await prisma.product.findMany({
        where: {
          name: {
            contains: productName,
            mode: "insensitive", // Pencarian case-insensitive
          },
        },
        include: {
          category: { select: { category_name: true } },
          warehouse: { select: { warehouse_name: true } },
        },
      });

      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  filterProductByCategory: async (req, res) => {
    try {
      const { categoryName } = req.params;
      const products = await prisma.product.findMany({
        where: {
          category: {
            category_name: {
              equals: categoryName,
              mode: "insensitive", // Pencarian case-insensitive
            },
          },
        },
        include: {
          category: true,
          warehouse: true,
        },
      });

      console.log('Filtered Products:', products); // Tambahkan ini

      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};



module.exports = productController;
