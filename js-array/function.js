let numeroOriginal = 10;

function alteraNumero(numero) {
    numero = 50;
    numeroOriginal = 25;
    console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);
