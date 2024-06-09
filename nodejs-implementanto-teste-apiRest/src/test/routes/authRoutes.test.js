import request from 'supertest';
import {
  afterEach, beforeEach, describe,
} from '@jest/globals';
import app from '../../app.js';

let server;

beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('Testando a rota login (POST)', () => {
  it('O login deve possuir um email e senha para se autenticar', async () => {
    const loginMock = {
      email: 'tiago@email.com',
    };

    await request(server)
      .post('/login')
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });
});
