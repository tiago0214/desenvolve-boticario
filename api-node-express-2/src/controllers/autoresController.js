import NaoEncontrado from "../../erros/NaoEncontrado.js";
import {  autores  } from "../models/index.js";
import mongoose from "mongoose";

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = autores.find();
      req.resultado = autoresResultado;
      next(); 
    } catch (erro) {
      next(erro);
    }
  }

  static listarAutorPorId = async (req, res, next) => {

    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new NaoEncontrado('Id do Autor não localizado.'));
      }

    } catch (erro) {
      next(erro);
    }
  }


  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      const autorResultado = await autor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }


  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorEncotrado = await autores.findByIdAndUpdate(id, { $set: req.body });

      if (autorEncotrado !== null) {
        res.status(200).send({ message: "Autor atualizado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do autor não encontrado!"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorExcluido = await autores.findByIdAndDelete(id);

      if (autorExcluido !== null) {
        res.status(200).send({ message: "Autor removido com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do autor não localizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  }


}

export default AutorController