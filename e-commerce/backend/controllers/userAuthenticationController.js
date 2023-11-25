const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

function generateAffiliateCode(length) {
    const characters = '0123456789';
    let code = '';

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    return code;
}

const registerUser = async (req, res) => {
    const { full_name, password, email } = req.body;

    // to check if a user with provided email already exist
    try{
        const existingUser = await prisma.user.findFirst({
            where: { email },
        });
        if (existingUser) {
            return res.status(400).json({ message: "email is already in use"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        let affiliateCode
        let isCodeUnique = false;

        // loop the affiliate code generator until it is one of a kind
    while (!isCodeUnique) {
        affiliateCode = generateAffiliateCode(6);
        const userWithCode = await prisma.user.findFirst({
            where: { affiliate_code: affiliateCode },
        });

        isCodeUnique = !userWithCode;
    }
    const user = await prisma.user.create({
        data: {
            full_name,
            password: hashedPassword,
            email,
            affiliate_code: affiliateCode,
            affiliate_usage: false,
        },
    });
    res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message:"internal server error"});
    }
    }

    const loginUser = async (req, res) => {
        try {
            const { password, email } = req.body;
            const user = await prisma.user.findFirst({ where: { email }});
            if (!user) {
                return res.status(400).json({ message: "user not found"});
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({ message: "invalid password"});
            }
            const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET || 'default-secret');
            res.json({ token });
        } catch (error) {
            console.error("login error:", error);
            res.status(500).json({ message: "internal server error"});
        }
    };

    const addAddress = async (req,res) =>{
        try {
            const { userId } = req.user;
            const { address } = req.body;

            const user = await prisma.user.findUnique({
                where: { user_id: userId },
            });
            if (!user) {
                return res.status(400).json({ message: "user not found"});
            }

            const updatedUser = await prisma.user.update({
                where: { user_id: userId },
                data: { address },
            });

            res.json({ user: updatedUser });
        } catch(error) {
            console.error("add address error:", error);
            res.status(500).json({ message: "internal server error" });
        }
    }

    

    module.exports = { registerUser, loginUser, addAddress };