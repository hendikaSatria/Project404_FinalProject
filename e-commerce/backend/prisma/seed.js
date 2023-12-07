const { PrismaClient } = require("./generated/client");
const prisma = new PrismaClient();

async function main() {
  //seeding Admin
  const admin = await prisma.admin.create({
    data: {
      username: "admin",
      password: "admin",
    },
  });
  //end of seeding Admin

  //Seeding Warehouse
  const warehouse = await prisma.warehouse.createMany({
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
  //end of seeding Warehouse

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
  // Delete all existing OrderItems
  await prisma.orderItem.deleteMany();

  // Delete all existing ShoppingCartItems
  await prisma.shoppingCartItem.deleteMany();

  // Delete all existing products
  await prisma.product.deleteMany();

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
      }, {
        name: "Product 11",
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
        name: "Product 12",
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
        name: "Product 13",
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
        name: "Product 14",
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
        name: "Product 15",
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
        name: "Product 16",
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
        name: "Product 17",
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
        name: "Product 18",
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
        name: "Product 19",
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
        name: "Product 20",
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

  //seeding User
  const user = await prisma.user.createMany({
    data: [
      {
        full_name: "John Doe",
        password: "securepassword1",
        email: "john.doe@example.com",
        affiliate_code: "ABC123",
        affiliate_usage: true,
      },
      {
        full_name: "Jane Smith",
        password: "strongpass2023",
        email: "jane.smith@example.com",
        affiliate_code: "XYZ789",
        affiliate_usage: false,
      },
      {
        full_name: "Mike Johnson",
        password: "mypassword123",
        email: "mike.johnson@example.com",
        affiliate_code: "DEF456",
        affiliate_usage: true,
      },
      {
        full_name: "Emily Brown",
        password: "secretword321",
        email: "emily.brown@example.com",
        affiliate_code: "GHI789",
        affiliate_usage: false,
      },
      {
        full_name: "Alex Turner",
        password: "pass1234word",
        email: "alex.turner@example.com",
        affiliate_code: "JKL012",
        affiliate_usage: true,
      },
      {
        full_name: "Grace Wilson",
        password: "gracefulpass",
        email: "grace.wilson@example.com",
        affiliate_code: "MNO345",
        affiliate_usage: false,
      },
      {
        full_name: "Daniel Lee",
        password: "danielpass456",
        email: "daniel.lee@example.com",
        affiliate_code: "PQR678",
        affiliate_usage: true,
      },
      {
        full_name: "Olivia Moore",
        password: "oliviapass789",
        email: "olivia.moore@example.com",
        affiliate_code: "STU901",
        affiliate_usage: false,
      },
      {
        full_name: "William Davis",
        password: "william123pass",
        email: "william.davis@example.com",
        affiliate_code: "VWX234",
        affiliate_usage: true,
      },
      {
        full_name: "Sophia Rodriguez",
        password: "sophiapass567",
        email: "sophia.rodriguez@example.com",
        affiliate_code: "YZA567",
        affiliate_usage: false,
      },
    ],
  });

  await prisma.promotion.create({
    data: {
      type: 'percentage',
      maximum_usage: 100,
      amount: 10, // 10% discount
      remaining_usage: 100,
      admin_id: 1,
    },
  });

  await prisma.promotion.create({
    data: {
      type: 'fixed',
      maximum_usage: 50,
      amount: 5, // Fixed $5 discount
      remaining_usage: 50,
      admin_id: 1,
    },
  });

  await prisma.promotion.create({
    data: {
      type: 'category 1',
      maximum_usage: 50,
      amount: 15, // 15% discount for specific category
      remaining_usage: 50,
      admin_id: 1,
      promo_code: 'category 1'
    },
  });

  console.log('Promo seed data created successfully');
}

main()
  .catch(async (e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
