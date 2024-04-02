const html = document.querySelector('html');
const focuBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focuBt.addEventListener('click', () => {
    alteraContexto('foco');
})

curtoBt.addEventListener('click', () => {
    alteraContexto('descanso-curto');
})

longoBt.addEventListener('click', () => {
    alteraContexto('descanso-longo');
})

function alteraContexto(contexto) {
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
            Hora de voltar à superficies,<br>
                <strong class="app__title-strong">faça uma pausa longa.</strong>
            `;
        default:
            break;
    }
}