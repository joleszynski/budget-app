import app from '../server';
import User from '../model/User';
import supertest from 'supertest';
const { setupDB } = require('../test-setup');

const request = supertest(app);

setupDB();

describe('Authentication tests', () => {
  const demoUser = {
    name: 'Johny Silverhand',
    email: 'johny@silver.com',
    password: 'johny11',
  };

  const prefixUrl = '/api/user';

  describe('Validation', () => {
    it(`POST ${prefixUrl}/register send empty required`, async (done) => {
      const res = await request.post(prefixUrl + '/register');

      expect(res.status).toBe(400);
      expect(res.body).toBe('"name" is required');

      done();
    });

    it(`POST ${prefixUrl}/register name required`, async (done) => {
      const res = await request
        .post(prefixUrl + '/register')
        .send({ email: demoUser.email, password: demoUser.password });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"name" is required');

      done();
    });

    it(`POST ${prefixUrl}/register email required`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send({ name: demoUser.name });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"email" is required');

      done();
    });

    it(`POST ${prefixUrl}/register password required`, async (done) => {
      const res = await request
        .post(prefixUrl + '/register')
        .send({ name: demoUser.name, email: demoUser.email });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"password" is required');

      done();
    });

    it(`POST ${prefixUrl}/register to short name test`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send({
        name: 'John',
        email: demoUser.email,
        password: demoUser.password,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"name" length must be at least 6 characters long');

      done();
    });

    it(`POST ${prefixUrl}/register email field test_1`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send({
        name: demoUser.name,
        email: 'johnygmail.com',
        password: demoUser.password,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"email" must be a valid email');

      done();
    });

    it(`POST ${prefixUrl}/register email field test_2`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send({
        name: demoUser.name,
        email: 'johny@gmail',
        password: demoUser.password,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"email" must be a valid email');

      done();
    });

    it(`POST ${prefixUrl}/register email field test_3`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send({
        name: demoUser.name,
        email: 'j@j.c',
        password: demoUser.password,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"email" length must be at least 6 characters long');

      done();
    });

    it(`POST ${prefixUrl}/register password field to short`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send({
        name: demoUser.name,
        email: demoUser.email,
        password: 'test',
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('"password" length must be at least 6 characters long');

      done();
    });

    it(`POST ${prefixUrl}/login email required`, async (done) => {
      const res = await request.post(prefixUrl + '/login').send({
        password: demoUser.password,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('Login or Password is incorrect');

      done();
    });

    it(`POST ${prefixUrl}/login password required`, async (done) => {
      const res = await request.post(prefixUrl + '/login').send({
        email: demoUser.email,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('Login or Password is incorrect');

      done();
    });

    it(`POST ${prefixUrl}/login email valid`, async (done) => {
      const res = await request.post(prefixUrl + '/login').send({
        email: 'johnytest.com',
        password: demoUser.password,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('Login or Password is incorrect');

      done();
    });

    it(`POST ${prefixUrl}/login password valid`, async (done) => {
      const res = await request.post(prefixUrl + '/login').send({
        email: demoUser.email,
        password: 'john',
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('Login or Password is incorrect');

      done();
    });
  });

  describe('Registered and Login User', () => {
    it(`POST ${prefixUrl}/register user correct`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send(demoUser);

      expect(res.status).toBe(200);
      expect(res.body).toBe('Registered successfull !');

      const user = await User.findOne({ email: demoUser.email });

      expect(user).toBeTruthy();
      expect(user.name).toBe(demoUser.name);
      expect(user.email).toBe(demoUser.email);

      done();
    });

    it(`POST ${prefixUrl}/register email already exist`, async (done) => {
      const res = await request.post(prefixUrl + '/register').send(demoUser);

      expect(res.status).toBe(400);
      expect(res.body).toBe('Email already exists');

      const user = await User.findOne({ email: demoUser.email });

      expect(user).toBeTruthy();
      expect(user.name).toBe(demoUser.name);
      expect(user.email).toBe(demoUser.email);

      done();
    });

    it(`POST ${prefixUrl}/login user correct`, async (done) => {
      const res = await request.post(prefixUrl + '/login').send({
        email: demoUser.email,
        password: demoUser.password,
      });

      expect(res.status).toBe(200);
      expect(res.body).toBeTruthy();

      done();
    });

    it(`POST ${prefixUrl}/login email not found`, async (done) => {
      const res = await request.post(prefixUrl + '/login').send({
        email: 'johny@notfound.com',
        password: demoUser.password,
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('Email is not found');

      done();
    });

    it(`POST ${prefixUrl}/login password valid`, async (done) => {
      const res = await request.post(prefixUrl + '/login').send({
        email: demoUser.email,
        password: 'johny111',
      });

      expect(res.status).toBe(400);
      expect(res.body).toBe('Invalid Password');

      done();
    });
  });
});
