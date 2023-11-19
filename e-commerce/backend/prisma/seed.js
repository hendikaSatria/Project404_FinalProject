const { PrismaClient } = require("./generated/client");
const prisma = new PrismaClient();

async function main() {
  //Seeding Admin
  const admin = await prisma.admin.create({
    data: {
      username: "admin",
      password: "admin",
    },
  });

  //Seeding Warehouse
  const warehouse = await prisma.warehouse.create({
    data: [
      {
        province_id: 31,
        province_name: "DKI Jakarta",
        city_id: 1,
        city_name: "Jakarta Pusat",
        postal_code: 10110,
        admin_id: 1,
      },
      {
        province_id: 31,
        province_name: "DKI Jakarta",
        city_id: 2,
        city_name: "Jakarta Selatan",
        postal_code: 12110,
        admin_id: 1,
      },
    ],
  });

  //Seeding Category
  const category = await prisma.category.createMany({
    data: [
      {
        category_name: "Category 1",
      },
      {
        category_name: "Category 2",
      },
      {
        category_name: "Category 3",
      },
      {
        category_name: "Category 4",
      },
      {
        category_name: "Category 5",
      },
    ],
  });

  //Seeding Product
  const product = await prisma.product.createMany({
    data: [
      {
        name: "Product 1",
        description: "Description for Product 1",
        price: 29.99,
        stock: 100,
        is_available: true,
        category_id: 1,
        warehouse_id: 1,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 0.5,
      },
      {
        name: "Product 2",
        description: "Description for Product 2",
        price: 49.99,
        stock: 50,
        is_available: true,
        category_id: 1,
        warehouse_id: 1,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 0.7,
      },
      {
        name: "Product 3",
        description: "Description for Product 3",
        price: 19.99,
        stock: 75,
        is_available: true,
        category_id: 2,
        warehouse_id: 2,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 0.3,
      },
      {
        name: "Product 4",
        description: "Description for Product 4",
        price: 39.99,
        stock: 120,
        is_available: false,
        category_id: 2,
        warehouse_id: 2,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 0.6,
      },
      {
        name: "Product 5",
        description: "Description for Product 5",
        price: 59.99,
        stock: 90,
        is_available: true,
        category_id: 3,
        warehouse_id: 1,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 0.8,
      },
      {
        name: "Product 6",
        description: "Description for Product 6",
        price: 29.99,
        stock: 60,
        is_available: true,
        category_id: 3,
        warehouse_id: 1,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 0.4,
      },
      {
        name: "Product 7",
        description: "Description for Product 7",
        price: 79.99,
        stock: 30,
        is_available: false,
        category_id: 4,
        warehouse_id: 2,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 1.2,
      },
      {
        name: "Product 8",
        description: "Description for Product 8",
        price: 89.99,
        stock: 80,
        is_available: true,
        category_id: 4,
        warehouse_id: 1,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 0.9,
      },
      {
        name: "Product 9",
        description: "Description for Product 9",
        price: 69.99,
        stock: 40,
        is_available: true,
        category_id: 5,
        warehouse_id: 1,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 1.0,
      },
      {
        name: "Product 10",
        description: "Description for Product 10",
        price: 99.99,
        stock: 110,
        is_available: true,
        category_id: 5,
        warehouse_id: 2,
        image: "https://dummyimage.com/700x700/ffffff/000000.jpg",
        weight: 1.5,
      },
    ],
  });
}

main()
  .catch(async (e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });