import chalk from "chalk";
import fs from "fs";
import pegarArquivos from "./index.js";
import listaValida from "./http-valida.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, caminho) {
    if (valida) {
        console.log(
            chalk.yellow("Lista de links arquivo: ", caminho),
            await listaValida(resultado)
        );
    } else {
        console.log(
            chalk.yellow("Lista de links arquivo: ", caminho),
            resultado
        );
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const validacao = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === "ENOENT") {
            console.log(chalk.red("Diretório não encontrado!"));
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegarArquivos(caminho);
        imprimeLista(validacao, resultado);
    }
    else if (fs.lstatSync(caminho).isDirectory()) {
        const diretorio = await fs.promises.readdir(caminho);
        diretorio.forEach(async (arquivos) => {
            const lista = await pegarArquivos(`${caminho}/${arquivos}`);
            imprimeLista(validacao, lista, arquivos)
        });
    }
}

processaTexto(caminho);