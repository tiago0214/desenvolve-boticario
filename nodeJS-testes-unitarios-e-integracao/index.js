import assert from "node:assert/strict"

const somaHorasExtrar = (salario,valorHoraExtra) => salario + valorHoraExtra;

const calculaDescontos = (salario,desconto) => salario - desconto;

const calcularPorcetagem = (salario,porcetagem) => (salario * porcetagem) / 100;

export {somaHorasExtrar,calculaDescontos};
// const verifiqueSe = (valor)=>{
//   const assercoes = {
//     ehExatamenteIgualA(esperado){
//       assert.strictEqual(valor,esperado);
//     }
//   }
//   return assercoes;
// }

// const teste = (titulo,funcaoDeTeste)=>{
//   try {
//     funcaoDeTeste();
//     console.log(`${titulo} - passou !`)
//   } catch (error) {
//     console.error(`${titulo} - não passou!!`)
//   }
// }

// teste('somaHorasExtras',()=>{
//   const valorEsperado = 2500;
//   const valorRetornado = somaHorasExtrar(2000,500);

//   verifiqueSe(valorRetornado).ehExatamenteIgualA(valorEsperado);
// })