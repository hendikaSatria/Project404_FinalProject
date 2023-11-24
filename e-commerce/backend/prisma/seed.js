const { PrismaClient } = require("./generated/client");
const prisma = new PrismaClient();

async function main() {
  try {
    // Seeding Admin
    const admin = await prisma.admin.create({
      data: {
        username: "admin",
        password: "admin",
      },
    });

    // Seeding Warehouse
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


    // Creating users
    const user1 = await prisma.user.create({
      data: {
        full_name: 'John Doe',
        password: 'password123',
        email: 'john@example.com',
        affiliate_code: 'ABC123',
        affiliate_usage: true,
        // Add other user data as needed
      },
    });
    
    const user2 = await prisma.user.create({
      data: {
        full_name: 'Jane Doe',
        password: 'password456',
        email: 'jane@example.com',
        affiliate_code: 'XYZ789',
        affiliate_usage: false,
        // Add other user data as needed
      },
    });
    
    // Creating user addresses
    const address1 = await prisma.userAddress.create({
      data: {
        user_id: user1.user_id,  // Check if user1 has a valid user_id
        province_id: 21,
        province_name: "Nanggroe Aceh Darussalam (NAD)",
        city_id: 1,
        city_name: "Aceh Barat",
        postal_code: 23681,
      },
    });
    
    const address2 = await prisma.userAddress.create({
      data: {
        user_id: user2.user_id,  // Check if user2 has a valid user_id
        province_id: 23,
        province_name: "Nusa Tenggara Timur (NTT)",
        city_id: 13,
        city_name: "Alor",
        postal_code: 54321,
      },
    });

  console.log('Created user 1:', user1);
  console.log('Created address 1:', address1);
    
  console.log('Created user 2:', user2);
  console.log('Created address 2:', address2);
    

  console.log('Seed data created successfully');

    // Seeding Category
    const category = await prisma.category.createMany({
      data: [
        {
          category_name: "Category 1",
        },
        {
          category_name: "Category 2",
        },
      ],
    });


    await prisma.product.createMany({
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
          weight: 1000,
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
          weight: 200,
        },
      ],
    });

    async function seedPromotions() {
      try {
        // Fetch admin ID for associating with promotions
        const admin = await prisma.admin.findUnique({
          where: {
            admin_id: 1, 
          },
        });
    
        // Create promotions
        const promotions = await prisma.promotion.createMany({
          data: [
              {
                  type: "percentage",
                  maximum_usage: 100,
                  amount: 10,
                  remaining_usage: 100,
                  admin_id: admin.admin_id,
                  promo_code: "PERCENTAGE_10_OFF", 
              },
              {
                  type: "fixed",
                  maximum_usage: 50,
                  amount: 5,
                  remaining_usage: 50,
                  admin_id: admin.admin_id,
                  promo_code: "FIXED_5_OFF", 
              },
          ],
      });
      
    
        // Log the created promotions
        console.log('Created promotions:', promotions);
    
        console.log("Promotion seed completed successfully.");
      } catch (error) {
        console.error("Promotion seed failed:", error);
      }
    }
    
    await seedPromotions();
    

    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("Seed failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();