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
  //end of seeding Category

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

  //seeding User
  const user = await prisma.user.createMany({
    data: [
      {
        full_name: "John Doe",
        password: "securepassword1",
        email: "john.doe@example.com",
        affiliate_code: "ABC123",
        billing_address: "123 Main Street, Cityville",
        affiliate_usage: true,
      },
      {
        full_name: "Jane Smith",
        password: "strongpass2023",
        email: "jane.smith@example.com",
        affiliate_code: "XYZ789",
        billing_address: "456 Oak Avenue, Townsville",
        affiliate_usage: false,
      },
      {
        full_name: "Mike Johnson",
        password: "mypassword123",
        email: "mike.johnson@example.com",
        affiliate_code: "DEF456",
        billing_address: "789 Pine Road, Villagetown",
        affiliate_usage: true,
      },
      {
        full_name: "Emily Brown",
        password: "secretword321",
        email: "emily.brown@example.com",
        affiliate_code: "GHI789",
        billing_address: "101 Elm Street, Hamletville",
        affiliate_usage: false,
      },
      {
        full_name: "Alex Turner",
        password: "pass1234word",
        email: "alex.turner@example.com",
        affiliate_code: "JKL012",
        billing_address: "202 Birch Lane, Boroughburg",
        affiliate_usage: true,
      },
      {
        full_name: "Grace Wilson",
        password: "gracefulpass",
        email: "grace.wilson@example.com",
        affiliate_code: "MNO345",
        billing_address: "303 Cedar Street, Township",
        affiliate_usage: false,
      },
      {
        full_name: "Daniel Lee",
        password: "danielpass456",
        email: "daniel.lee@example.com",
        affiliate_code: "PQR678",
        billing_address: "404 Maple Avenue, Citytown",
        affiliate_usage: true,
      },
      {
        full_name: "Olivia Moore",
        password: "oliviapass789",
        email: "olivia.moore@example.com",
        affiliate_code: "STU901",
        billing_address: "505 Walnut Road, Villagetown",
        affiliate_usage: false,
      },
      {
        full_name: "William Davis",
        password: "william123pass",
        email: "william.davis@example.com",
        affiliate_code: "VWX234",
        billing_address: "606 Oak Lane, Hamletville",
        affiliate_usage: true,
      },
      {
        full_name: "Sophia Rodriguez",
        password: "sophiapass567",
        email: "sophia.rodriguez@example.com",
        affiliate_code: "YZA567",
        billing_address: "707 Pine Street, Boroughburg",
        affiliate_usage: false,
      },
    ],
  });
  //end of seeding User

  //seeding Orders
  const order1 = await prisma.orders.upsert({
    where: {
      order_id: 1, // ID order yang diinginkan
    },
    create: {
      user_id: 1,
      order_date: "2023-11-23T05:41:21.924Z",
      delivery_time: "2023-11-23T05:41:21.924Z",
      deliver_fee: "100000",
      total_price: "100149.95",
      payment_status: "Pending",
      order_status: "Processing",
      admin_id: 1,
      order_items: {
        create: {
          order_item_id: 17,
          product_id: 1, // sesuaikan id dengan id product yang tersedia di database
          quantity: 5,
          price: "29.99",
        },
      },
    },
    update: {},
  });
  const order2 = await prisma.orders.upsert({
    where: {
      order_id: 2, // ID order yang diinginkan
    },
    create: {
      user_id: 2,
      order_date: "2023-11-23T05:41:21.924Z",
      delivery_time: "2023-11-23T05:41:21.924Z",
      deliver_fee: "100000",
      total_price: "100149.95",
      payment_status: "Pending",
      order_status: "Processing",
      admin_id: 1,
      order_items: {
        create: {
          order_item_id: 17,
          product_id: 1, // sesuaikan id dengan id product yang tersedia di database
          quantity: 5,
          price: "29.99",
        },
      },
    },
    update: {},
  });
  const order3 = await prisma.orders.upsert({
    where: {
      order_id: 3, // ID order yang diinginkan
    },
    create: {
      user_id: 3,
      order_date: "2023-11-23T05:41:21.924Z",
      delivery_time: "2023-11-23T05:41:21.924Z",
      deliver_fee: "100000",
      total_price: "100149.95",
      payment_status: "Pending",
      order_status: "Processing",
      admin_id: 1,
      order_items: {
        create: {
          order_item_id: 17,
          product_id: 1, // sesuaikan id dengan id product yang tersedia di database
          quantity: 5,
          price: "29.99",
        },
      },
    },
    update: {},
    // end of seeding Orders
  });
}

main()
  .catch(async (e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
