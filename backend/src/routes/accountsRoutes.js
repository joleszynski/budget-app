import express from 'express';
import verify from './verifyToken';
const accountsRoutes = express.Router();

import listAccounts from '../controllers/Accounts/listAccounts';
import addAccount from '../controllers/Accounts/addAccount';
import deleteAccount from '../controllers/Accounts/deleteAccount';

accountsRoutes.get('/', verify, async (req, res) => listAccounts(req, res));
accountsRoutes.post('/add', verify, async (req, res) => addAccount(req, res));
accountsRoutes.post('/delete', verify, async (req, res) => deleteAccount(req, res));

export default accountsRoutes;
