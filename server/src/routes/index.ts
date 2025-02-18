import { Router } from "express";
import { authRouter } from "./authRoutes.js";
import apiRoutes from "./api/index.js";
import { authenticateToken } from "../middleware/auth.js";
const router = Router();
router.use("/auth", authRouter);
router.use("/api", authenticateToken, apiRoutes);
export default router;
