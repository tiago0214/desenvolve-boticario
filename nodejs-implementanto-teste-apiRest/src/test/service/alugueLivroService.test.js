import { describe, expect } from '@jest/globals';
import AluguelLivroService from '../../services/aluguelLivroService.js';

const aluguelLivroService = new AluguelLivroService();

describe('Testando AluguelLivroService', () => {
  it('Retornar a data de devolução de dias validando a quantidade de dias alugados.', async () => {
    const dataAlugado = new Date('2023-01-01');
    const diasAlugados = 5;
    const dataDevolucaoMock = new Date('2023-01-06');

    // eslint-disable-next-line max-len
    const dataDevolucao = await aluguelLivroService.calcularDataDevolucao(dataAlugado, diasAlugados);

    expect(dataDevolucao).toStrictEqual(dataDevolucaoMock);
  });
});
