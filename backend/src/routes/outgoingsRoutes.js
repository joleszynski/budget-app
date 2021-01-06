import express from 'express';
import verify from './verifyToken';
const outgoingsRoutes = express.Router();

import listOutgoings from '../controllers/Outgoings/listOutgoings';
// import addAccount from '../controllers/Accounts/addAccount';
// import deleteAccount from '../controllers/Accounts/deleteAccount';

outgoingsRoutes.get('/', verify, async (req, res) => listOutgoings(req, res));
// accountsRoutes.post('/add', verify, async (req, res) => addAccount(req, res));
// accountsRoutes.post('/delete', verify, async (req, res) => deleteAccount(req, res));

export default outgoingsRoutes;
