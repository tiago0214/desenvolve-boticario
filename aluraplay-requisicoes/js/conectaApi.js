async function listaVideos() {
    const conexao = await fetch('https://661d087de7b95ad7fa6bec28.mockapi.io/videos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch('https://661d087de7b95ad7fa6bec28.mockapi.io/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visuzalizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o video");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`https://661d087de7b95ad7fa6bec28.mockapi.io/videos?search=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}