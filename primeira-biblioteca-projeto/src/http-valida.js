import chalk from "chalk";

function extrairLink(listaLinks) {
    return listaLinks.map((objetoAtual) => Object.values(objetoAtual).join());
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try {
                const resposta = await fetch(url);
                return `${resposta.status} - ${resposta.statusText}`;
            } catch (erro) {
                return manejaErro(erro);
            }
        })
    );
    return arrStatus;
}

function manejaErro(erro) {
    if (erro.cause === 'ENOTFOUND') {
        return 'Link não encontrado';
    } else {
        return 'Ocorreu um erro';
    }
}

export default async function listaValida(ListaDeLinks) {
    const link = extrairLink(ListaDeLinks);
    const status = await checaStatus(link);
    return ListaDeLinks.map((objeto, indice) => {
        return ({
            ...objeto,
            status: status[indice]
        })
    });
}