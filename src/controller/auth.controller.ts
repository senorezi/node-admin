import { Request, Response } from "express";

// I have an exported function
// name is Register
// has parameters that accept 2 variables, req and res that are type Request and Response from the Express module

export const Register = (req: Request, res:Response) => {
    res.send(req.body);
}