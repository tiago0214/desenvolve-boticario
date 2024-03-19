import chalk from "chalk";
import fs from "fs";
import pegarArquivos from "./index.js";

const caminho = process.argv;

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegarArquivos(caminho);
        console.log(resultado);
    }
    else if (fs.lstatSync(caminho).isDirectory()) {
        const diretorio = await fs.promises.readdir(caminho);
        diretorio.forEach(async (arquivos) => {
            console.log(await pegarArquivos(`${caminho}/${arquivos}`))
        });
    }
}

processaTexto(caminho);