
import { Router } from 'express';
import { userRouter } from './user-routes.ts';
import { authRouter } from './auth-routes.ts';
import { movieRoutes } from './movieRoutes.ts';

const router = Router();
router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/movies', movieRoutes);
export default router;