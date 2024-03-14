const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
    value: 42,
    enumerable: false
});

console.log(meuObjeto.value);//retorno undefined

for (let chave in meuObjeto) {
    console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
};
//a propriedade fica escondida na iteração