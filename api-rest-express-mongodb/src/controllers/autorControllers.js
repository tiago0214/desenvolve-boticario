import { autor } from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição dos autores!` })
        }

    }

    static async listaAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao procurar o autor.` })
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(200).json({
                message: "Novo autor cadastrado com sucesso!",
                autor: novoAutor
            })
        } catch (error) {
            res.status(500).json({ message: ` ${error.message} - falha ao cadastrar o autor!` });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Autor atualizado com sucesso!` });
        }
        catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar o autor.` })
        }
    }

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndRemove(id);
            res.status(200).json({ message: `Autor excluido com sucesso!` })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na exclusão.` })
        }
    }
}

export default AutorController;