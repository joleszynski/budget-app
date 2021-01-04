import express from 'express';

const router = express.Router();

// Routers
import userRoutes from './userRoutes';
import accountsRoutes from './accountsRoutes';

router.use('/user', userRoutes);
router.use('/accounts', accountsRoutes);

export default router;
