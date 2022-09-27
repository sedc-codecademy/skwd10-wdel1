import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authValidator } from "../middlewares/auth.middleware.js";

export const authRouter = Router();

// 1. Register User
authRouter.post("/register", AuthController.registerUser);
// 2. Login User
authRouter.post("/login", AuthController.loginUser);
// 3. Refresh access token
authRouter.post("/refresh-token", AuthController.refreshAcessToken);
// 4. Logout user
authRouter.post("/logout", authValidator, AuthController.logoutUser);
// 5. Logout all
authRouter.post("/logout-all", authValidator, AuthController.logoutAll);
