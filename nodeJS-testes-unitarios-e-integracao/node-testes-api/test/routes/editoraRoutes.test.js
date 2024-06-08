import {
  afterEach, beforeEach, describe, expect, jest,
} from '@jest/globals';
import request from 'supertest';
import app from '../../src/app.js';

let server;

beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    const resposta = await request(app)
      .get('/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body[0].email).toEqual('e@e.com');
  });
});

let respostaId;

describe('POST em /editoras', () => {
  it('Deve adicionar uma nova editora', async () => {
    const resposta = await request(app)
      .post('/editoras')
      .send({
        nome: 'CDC',
        cidade: 'são paulo',
        email: 'c@c.com',
      })
      .expect(201);
    respostaId = resposta.body.content.id;
  });

  it('Deve retornar status 400 quando o corpo da requisição estiver vazio', async () => {
    await request(app)
      .post('/editoras')
      .send({})
      .expect(400);
  });
});

describe('PUT em /editoras/id', () => {
  test.each([
    ['Nome', { nome: 'Casa do código' }],
    ['Email', { email: 'cdc@cdc.com' }],
    ['Cidade', { cidade: 'SP' }],
  ])('Atualizar o recurso %s', async (chave, params) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');

    await requisicao.request(app)
      .put(`/editoras/${respostaId}`)
      .send(params)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('GET em /editoras/id', () => {
  it('Deve retornar o recurso adicionado', async () => {
    await request(app)
      .get(`/editoras/${respostaId}`)
      .expect(200);
  });
});

describe('Delete em /editoras', () => {
  it('Deletar o recurso adicionado', async () => {
    await request(app)
      .delete(`/editoras/${respostaId}`)
      .expect(200);
  });
});
