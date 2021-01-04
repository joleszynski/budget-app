import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('Connected to MongoDB !'),
);

// Import paths
// import authRoute from './routes/auth';
// import accountsRoute from './routes/accounts';
// import outgoingsRoute from './routes/outgoings';
// import transfersRoute from './routes/transfers';
// import incomeRoute from './routes/income';

//Middleware
app.use(express.json());
app.use(cors());

// app.get('/test', async (req, res) => {
//   res.json({ message: 'pass!' });
// });

// Import routes
import router from './routes/routes';
app.use('/api', router);

//RouteMiddleware
// app.use('/api/user', authRoute);
// app.use('/api/accounts', accountsRoute);
// app.use('/api/outgoings', outgoingsRoute);
// app.use('/api/transfers', transfersRoute);
// app.use('/api/income', incomeRoute);

module.exports = app;
