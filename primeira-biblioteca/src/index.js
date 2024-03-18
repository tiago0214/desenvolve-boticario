import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, "Ouve um erro!"));
}

function extrairLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*\))/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultado = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
    return resultado;
}

//async / await
async function pegarArquivos(caminho) {
    try {
        const enconding = "utf-8";
        const texto = await fs.promises.readFile(caminho, enconding);
        return extrairLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

export default pegarArquivos;



//trabalhando com promises com o .then()

// function pegaArquivo(caminho) {
//     const encondig = "utf-8";
//     fs.promises
//         .readFile(caminho, encondig)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro);
// }
// pegaArquivo("./arquivos/texto..md");


//forma sincrona de resolver

// function pegaArquivo(caminho) {
//     const enconding = "utf-8";
//     fs.readFile(caminho, enconding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }

//pegaArquivo("./arquivos/texto.md");