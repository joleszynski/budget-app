import express from 'express';
import verify from './verifyToken';
const incomesRoutes = express.Router();

import listIncomes from '../controllers/Incomes/listIncomes';
import addIncome from '../controllers/Incomes/addIncome';
import deleteIncome from '../controllers/Incomes/deleteIncome';

incomesRoutes.get('/', verify, async (req, res) => listIncomes(req, res));
incomesRoutes.post('/add', verify, async (req, res) => addIncome(req, res));
incomesRoutes.post('/delete', verify, async (req, res) => deleteIncome(req, res));

export default incomesRoutes;
