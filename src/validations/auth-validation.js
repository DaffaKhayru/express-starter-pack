import Joi from "joi";

export const authValidation = Joi.object({
    username: Joi.string().min(4).max(100).required(),
    email: Joi.string().min(4).max(100).email().required(),
    password: Joi.string().min(4).max(100).required(),
});