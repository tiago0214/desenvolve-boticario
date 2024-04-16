import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(event) {
    event.preventDefault();
    const pesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(pesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => {
        lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem));
    });

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe video com esse termo.</2>`
    }
}



const botao = document.querySelector("[data-pesquisa-botao]");

botao.addEventListener("click", (evento) => { buscarVideo(evento) })