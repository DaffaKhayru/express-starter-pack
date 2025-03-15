import Joi from "joi";

const signupValidation = Joi.object({
    username: Joi.string().min(4).max(100).required(),
    email: Joi.string().min(4).max(100).email().required(),
    password: Joi.string().min(4).max(100).required(),
});

const loginValidation = Joi.object({
    email: Joi.string().min(4).max(100).email().required(),
    password: Joi.string().min(4).max(100).required(),
});

export default {
    signupValidation,
    loginValidation
}