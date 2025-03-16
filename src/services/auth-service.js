import authValidation from "../validations/auth-validation.js";
import { validate } from "../validations/validate.js";
import {prismaClient} from '../config/database.js';
import { CustomError } from "../util/custom-error.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const signup = async (reqBody) => {
    // validate user 
    const signupReq = validate(authValidation.signupValidation, reqBody);

    // find user inside database
    const findUser = await prismaClient.user.findFirst({
        where: {
            email: signupReq.email
        }
    });

    // check if user exist or not
    if(findUser) {
        throw new CustomError(400, "User is already exist");
    }

    // hashing password
    signupReq.password = await bcrypt.hash(signupReq.password, 10);

    // creating new user
    await prismaClient.user.create({
        data: signupReq
    });

    // return value
    return { msg: "Signup success" }
};

const login = async (reqBody) => {
    // validate user login
    const loginReq = validate(authValidation.loginValidation, reqBody);

    // find user in database
    const findUser = await prismaClient.user.findFirst({
        where: {
            email: loginReq.email
        } 
    });

    // check if user available or not
    if(!findUser) {
        throw new CustomError(400, "User not registered");
    }

    // compare password 
    const compPassword = await bcrypt.compare(loginReq.password, findUser.password);

    // check if password compare true or false
    if(!compPassword) {
        throw new CustomError(400, "Password is invalid");
    }

    // create jwt token
    const genToken = jwt.sign(findUser, process.env.SECRET_KEY, { expiresIn: '3h' });

    // return some response
    return { 
        msg: "Login success",
        username: findUser.username,
        email: findUser.email,
        token: genToken
    }
}

const signout = async (reqBody) => {

}

export default {
    signup,
    login,
    signout
}