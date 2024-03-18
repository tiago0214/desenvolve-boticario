import chalk from "chalk";
import pegarArquivos from "./index.js";

const caminho = process.argv[2];

async function processaTexto(caminho) {
    const resultado = await pegarArquivos(caminho);
    console.log(resultado);
}

processaTexto(caminho);