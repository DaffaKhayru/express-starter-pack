import { authValidation } from "../validations/auth-validation.js";
import { validate } from "../validations/validate.js";
import {prismaClient} from '../config/database.js';
import { CustomError } from "../util/custom-error.js";
import bcrypt from 'bcrypt';

const signup = async (reqBody) => {
    // validate user 
    const userReq = validate(authValidation, reqBody);

    // find user inside database
    const findUser = await prismaClient.user.findFirst({
        where: {
            email: userReq.email
        }
    })

    // check if user exist or not
    if(findUser) {
        throw new CustomError(400, "User is already exist");
    }

    // hashing password
    userReq.password = await bcrypt.hash(userReq.password, 10);

    // creating new user
    const newUser = await prismaClient.user.create({
        data: userReq
    });

    // return value
    return { newUser }
};

export default {
    signup
}