import { describe, expect } from '@jest/globals';
import AuthService from '../../services/authService.js';

const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuário deve possuir nome, email e senha!', async () => {
    // Arrange : porque quer dizer quais informações que eu quero validar!
    const usuarioMock = {
      nome: 'Tiago',
      email: 'tiago@tiago.com.br',
    };
    // act : esta relacionado com o chamamento das funções de ações.
    // aciona o método que retorna os registros
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    // Assert : faz a comparação do nosso arrange com o assert
    await expect(usuarioSalvo).rejects.toThrowError('A senha do usuário não pode estar vazia!');
  });
});
