import express from 'express';

const router = express.Router();

// Routers
import userRoutes from './userRoutes';
import accountsRoutes from './accountsRoutes';
import outgoingsRoutes from './outgoingsRoutes';

router.use('/user', userRoutes);
router.use('/accounts', accountsRoutes);
router.use('/outgoings', outgoingsRoutes);

export default router;
