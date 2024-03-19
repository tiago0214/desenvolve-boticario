import chalk from "chalk";
import fs from "fs";
import pegarArquivos from "./index.js";

const caminho = process.argv;

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === "ENOENT") {
            console.log(chalk.red("Diretório não encontrado!"));
            return;
        }
    }

    function imprimeLista(texto, caminho) {
        console.log(chalk.yellow("Lista de links arquivo: ", caminho), texto);
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegarArquivos(caminho);
        imprimeLista(resultado);
    }
    else if (fs.lstatSync(caminho).isDirectory()) {
        const diretorio = await fs.promises.readdir(caminho);
        diretorio.forEach(async (arquivos) => {
            const lista = await pegarArquivos(`${caminho}/${arquivos}`);
            imprimeLista(lista, arquivos)
        });
    }
}

processaTexto(caminho);