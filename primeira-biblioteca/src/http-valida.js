function extrairLink(listaLinks) {
    return listaLinks.map((objetoAtual) => Object.values(objetoAtual).join());
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            const resposta = await fetch(url);
            return resposta.status;
        })
    );
    return arrStatus;
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

//[gatinho salsicha](http://gatinhosalsicha.com.br/)