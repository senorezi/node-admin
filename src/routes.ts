import { Router } from "express";
import { Register } from "./controller/auth.controller";

// this is an exported function:
// name is routes
// has parameter called router that accepts type Router
export const routes = (router: Router) => {
    router.post('/api/register', Register);
}