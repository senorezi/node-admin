import { Request, Response } from "express";
import { RegisterValidation } from "../validation/registration.validation";

// I have an exported function
// name is Register
// has parameters that accept 2 variables, req and res that are type Request and Response from the Express module

export const Register = (req: Request, res:Response) => {
    const body = req.body;

    // use the RegistraterValidation const to validate the incoming body
    // store in error destruct body
    // shorthand way to initialise variables from object properties
    const {error} = RegisterValidation.validate(body);

    // main error
    if (error) {
        return res.status(400).send(error.details);
    }
    
    // error if password and password doesnt match
    if (body.password !== body.password_confirm) {
        return res.status(400).send({
            message: 'Password does not match'
        })
    }
    // otherwise send back what the user sent
    res.send(req.body);
}