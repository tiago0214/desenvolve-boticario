import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js"

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição dos livros` })
        }

    }

    static async listaLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao procurar o livro` })
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncotrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncotrado._doc } };
            await livro.create(livroCompleto);
            res.status(200).json({
                message: "Novo livro cadastrado com sucesso!",
                livro: livroCompleto
            })
        } catch (error) {
            res.status(500).json({ message: ` ${error.message} - falha ao cadastrar o livro!` });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Livro atualizado com sucesso!` });
        }
        catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar o livro.` })
        }
    }

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndRemove(id);
            res.status(200).json({ message: `Livro excluido com sucesso!` })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na exclusão.` })
        }
    }

    static async listarLivroPorEditora(req, res) {
        const editora = req.query.editora
        try {
            const livroPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livroPorEditora)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar a editora!` })
        }
    }
}

export default LivroController;