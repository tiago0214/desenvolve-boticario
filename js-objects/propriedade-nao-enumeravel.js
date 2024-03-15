const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
    value: 42,
    enumerable: false
});

console.log(meuObjeto.propriedadeNaoEnumeravel);//consigo acessar o valor assim //mesmo com o false

for (let chave in meuObjeto) {
    console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
};
//a propriedade fica escondida na iteração
//se eu mudar para true, eu consigo ver o nome da propriedade