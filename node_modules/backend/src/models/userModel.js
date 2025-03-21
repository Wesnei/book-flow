import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// Função para criar um novo usuário
export const create_user = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    return prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword
        },
    });
};

// Função para encontrar um usuário pelo e-mail
export const findbyEmail = async (email) => {
    return prisma.user.findUnique({
        where: { email: email },
    });
};

// Função para encontrar um usuário pelo ID
export const findbyId = async (id) => {
    return prisma.user.findUnique({
        where: { id: id },
    });
};
