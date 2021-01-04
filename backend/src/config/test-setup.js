const { seedDatabase } = require('../seeds');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
}

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      // Sometimes this error happens, but you can safely ignore it
      if (error.message === 'ns not found') return;
      // This error occurs when you use it.todo. You can
      // safely ignore this error too
      if (error.message.includes('a background operation is currently running')) return;
      console.log(error.message);
    }
  }
}

module.exports = {
  setupDB(runSaveMiddleware = false) {
    // Connect to Mongoose
    beforeAll(async () => {
      const url = `mongodb+srv://node_app_user:DkJOOgCDxsawYPzO@nodeapp.ynzrt.mongodb.net/node_db?retryWrites=true&w=majority`;
      await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      await seedDatabase(runSaveMiddleware);
    });

    // // Seeds database before each test
    // beforeEach(async () => {
    //   await seedDatabase(runSaveMiddleware);
    // });

    // // Cleans up database between each test
    // afterEach(async () => {
    //   await removeAllCollections();
    // });

    // Disconnect Mongoose
    afterAll(async () => {
      await dropAllCollections();
      await mongoose.connection.close();
    });
  },
};
