import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import routes from "./routes/index.js"

const conexao = await conectaNaDataBase();
conexao.on("error", (erro) => {
    console.log("Erro com a conexão com o banco de dados!")
});

conexao.once("open", () => {
    console.log("Conexão feita com sucesso!");
})

const app = express();
routes(app);

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastro com sucesso');
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
})

export default app;

