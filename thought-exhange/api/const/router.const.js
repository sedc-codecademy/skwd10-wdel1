import { Router } from "express";
import { postsRouter } from "../routes/posts.routes.js";

export const globalRouter = Router();

globalRouter.use("/posts", postsRouter);
