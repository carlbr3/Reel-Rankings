import { Router } from "express";
import { userRouter } from "./user-routes.js";
import authRouter from "../authRoutes.js";
import { movieRoutes } from "./movieRoutes.js";

const router = Router();
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/movies", movieRoutes);
export default router;
