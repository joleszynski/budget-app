import express from 'express';
const userRoutes = express.Router();

import createUser from '../controllers/User/createUser';
import loginUser from '../controllers/User/loginUser';

userRoutes.post('/register', async (req, res) => createUser(req, res));
userRoutes.post('/login', async (req, res) => loginUser(req, res));

export default userRoutes;
