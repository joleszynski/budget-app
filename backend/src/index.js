const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'src/.env' });
const cors = require('cors');

const app = express();

//dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('Connected to db!'),
);

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const accountsRoute = require('./routes/accounts');

//Middleware
app.use(express.json());
app.use(cors());
//RouteMiddleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/accounts', accountsRoute);

app.listen(3030, () => console.log('Server is running...'));
