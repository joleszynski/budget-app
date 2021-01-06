import express from 'express';
import verify from './verifyToken';
const outgoingsRoutes = express.Router();

import listOutgoings from '../controllers/Outgoings/listOutgoings';
import addOutgoing from '../controllers/Outgoings/addOutgoing';
import deleteOutgoing from '../controllers/Outgoings/deleteOutgoing';

outgoingsRoutes.get('/', verify, async (req, res) => listOutgoings(req, res));
outgoingsRoutes.post('/add', verify, async (req, res) => addOutgoing(req, res));
outgoingsRoutes.post('/delete', verify, async (req, res) => deleteOutgoing(req, res));

export default outgoingsRoutes;
