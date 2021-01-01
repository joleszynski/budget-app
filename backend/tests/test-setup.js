import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;

module.exports = {
  setupDB() {
    // Connect to Mongoose
    beforeAll(async () => {
      const url = process.env.DB_CONNECT;
      await mongoose.connect(url, { useNewUrlParser: true });
    });

    // Disconnect Mongoose
    afterAll(async () => {
      await mongoose.connection.close();
    });
  },
};
