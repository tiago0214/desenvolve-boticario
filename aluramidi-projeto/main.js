const listaSons = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaSons.length) {
    const tecla = listaSons[contador];
    const intrumento = tecla.classList[1];
    const som = `#som_${intrumento}`;

    tecla.onclick = function () {
        tocarSom(som);
    };

    tecla.onkeydown = function (event) {
        if (event.key == 'Enter' || event.key == 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    contador++
}

function tocarSom(id) {
    const elemento = document.querySelector(id);

    if (elemento && elemento.localName == 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado');
    }
}
