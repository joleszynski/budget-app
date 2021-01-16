import express from 'express';

const router = express.Router();

// Routers
import userRoutes from './userRoutes';
import accountsRoutes from './accountsRoutes';
import outgoingsRoutes from './outgoingsRoutes';
import incomesRoutes from './incomeRoutes';
import transferRoutes from './transfersRoutes';

router.use('/user', userRoutes);
router.use('/accounts', accountsRoutes);
router.use('/outgoings', outgoingsRoutes);
router.use('/incomes', incomesRoutes);
router.use('/transfers', transferRoutes);

export default router;
