import dotenv from 'dotenv';
import app from './server';
dotenv.config();

const port = process.env.PORT || '5000';

app.listen(port, () => {
  console.log(`Budget app listening at http://localhost:${port}`);
});
