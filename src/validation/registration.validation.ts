import { Joi } from "express-validation";

// Use the exported Joi const from express-validation to validate the incoming traffic for /api/register
export const RegisterValidation = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    password_confirm: Joi.string().required(),
})