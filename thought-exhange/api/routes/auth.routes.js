import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

export const authRouter = Router();

// 1. Register User
authRouter.post("/register", AuthController.registerUser);
// 2. Login User
authRouter.post("/login", AuthController.loginUser);
