import { describe, expect } from '@jest/globals';
import nodemailer from 'nodemailer';
import 'dotenv/config.js';

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

const verificarConexao = () => new Promise((resolve, reject) => {
  transporter.verify((error, success) => {
    if (error) {
      reject(error);
    } else {
      resolve(success);
    }
  });
});

describe('Testando disparo de email', () => {
  it('O sistema deve validar se a conexao com o sistema de disparo de email esta acontecendo', async () => {
    const estaConectado = true;

    const validarConexao = await verificarConexao();

    expect(validarConexao).toStrictEqual(estaConectado);
  });
});
