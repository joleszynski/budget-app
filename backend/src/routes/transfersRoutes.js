import express from 'express';
import verify from './verifyToken';
const transfersRoutes = express.Router();

import listTransfers from '../controllers/Transfers/listTransfers';
import addTransfer from '../controllers/Transfers/addTransfer';
import deleteTransfer from '../controllers/Transfers/deleteTransfer';

transfersRoutes.get('/', verify, async (req, res) => listTransfers(req, res));
transfersRoutes.post('/add', verify, async (req, res) => addTransfer(req, res));
transfersRoutes.post('/delete', verify, async (req, res) => deleteTransfer(req, res));

export default transfersRoutes;
