import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "Curso de nodeJ",
    "/livros": "Entrei na rota de livros",
    "/autores": "Entrei na rota de autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor escutando")
});