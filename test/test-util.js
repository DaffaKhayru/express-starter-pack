import { prismaClient } from "../src/config/database"
import bcrypt from 'bcrypt';

export const deleteUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: "daffakhayru@gmail.com"
        }
    });
};

export const createUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "daffakhayru",
            email: "daffakhayru@gmail.com",
            password: await bcrypt.hash("daffa123", 10),
        }
    });
};

export default {
    deleteUser,
    createUser
}