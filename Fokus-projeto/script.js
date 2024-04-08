const html = document.querySelector('html');
const focuBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const starPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const imagemBt = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const play = new Audio('/sons/play.wav');
const pause = new Audio('/sons/pause.mp3');
const beep = new Audio('/sons/beep.mp3');
musica.loop = true;

let contadorRegressivoMinutos = 1500;
let intervaloId = null;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focuBt.addEventListener('click', () => {
    alteraContexto('foco');
    focuBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    contadorRegressivoMinutos = 300;
    alteraContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    contadorRegressivoMinutos = 900;
    alteraContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alteraContexto(contexto) {
    mostrarTempo()
    botoes.forEach((element) => element.classList.remove('active'));

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada,<br>
                <strong class="app__title-strong">faça uma pausa curta.</strong>
            `;
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superficie,<br>
                <strong class="app__title-strong">faça uma pausa longa.</strong>
            `;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (contadorRegressivoMinutos == 0) {
        beep.play();
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        zerar();
        alert('Contagem terminou');
        return;
    }
    contadorRegressivoMinutos--;
    mostrarTempo();

}

starPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        pause.play();
        zerar();
        return;
    }
    imagemBt.setAttribute('src', '/imagens/pause.png');
    iniciarOuPausarBt.textContent = 'Pausar';
    play.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    imagemBt.setAttribute('src', '/imagens/play_arrow.png');
    iniciarOuPausarBt.textContent = 'Continuar';
    clearInterval(intervaloId);
    intervaloId = null;
}

function mostrarTempo() {
    let tempo = new Date(contadorRegressivoMinutos * 1000);
    let tempoFormatado = tempo.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' });
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();