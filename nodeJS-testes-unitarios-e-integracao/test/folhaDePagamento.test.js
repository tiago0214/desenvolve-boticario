import { calculaDescontos,somaHorasExtrar } from "../index.js";


describe("Testes dos calculos de folha",()=>{
  
  it("Deve verificar o retorno da soma das horas extras", ()=>{
    const esperado = 2500;
    const retornado = somaHorasExtrar(2000,500);
  
    expect(retornado).toBe(esperado);
  })
  
  it("Deve verificar o calculo dos descontos",()=>{
    const esperado = 2300;
    const retornado = calculaDescontos(2500,200);
  
    expect(retornado).toBe(esperado);
  })
})