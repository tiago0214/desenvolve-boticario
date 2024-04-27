const botaoIniciarACamera = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

let imagemURL = "";

botaoIniciarACamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    campoCamera.style.display = "block";
    botaoIniciarACamera.style.display = "none";
    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function () {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});