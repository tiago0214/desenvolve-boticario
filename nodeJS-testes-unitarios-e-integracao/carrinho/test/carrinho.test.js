import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe("Teste do carrinho",()=>{
  it("Deve inicializar vazio",()=>{
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it("Deve ter itens",()=>{
    const carrinho = new Carrinho();
    const item1 = new Item("banana", 1, 5 );
    const item2 = new Item("maca", 2, 5);
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item1);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
  })

  it("Deve ter a propriedade 'total' na inicialização",()=>{
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty("total");
  })

  it("Finaliza compra e deve retornar um erro, porque o carrinho esta vazio",()=>{
    function englobaErro(){
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    };

    expect(englobaErro).toThrowError("Carrinho de compras vazio");
  })

  it("Deve adicionar o frete",()=>{
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  })

  it("Deve finalizar a compra com sucesso",()=>{
    const item1 = new Item("Banana", 1, 2);
    const item2 = new Item("Maça", 2, 5);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal:12,
      frete:10,
      total:22
    });
  })
})