import { Router } from "express";
import { userRouter } from "./user-routes";
import { authRouter } from "./authRoutes";
import { movieRoutes } from "./movieRoutes";

const router = Router();
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/movies", movieRoutes);
export default router;
