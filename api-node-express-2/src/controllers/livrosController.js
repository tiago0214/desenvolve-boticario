import NaoEncontrado from "../../erros/NaoEncontrado.js";
import {  autores, livros  } from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();
      req.resultado = buscaLivros;
      next();
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id,{},{autopopulate:false}).populate("autor", "nome")
      //o primeiro parametro:autor:indica o campo para ser populado
      //o segundo parametro:nome: indica qual é o campo do autor que sera mostrado
      //se eu deixar somente o primeiro parametro, eu indico que eu quero todos os campos do meu objeto autor para ser
      //mostrado

      if (livroResultados !== null) {
        res.status(200).send(livroResultados);
      } else {
        next(new NaoEncontrado("Id do livro não localizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroEncontrado = await livros.findByIdAndUpdate(id, { $set: req.body });

      if (livroEncontrado !== null) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não encontrado!"))
      }

    } catch (erro) {
      next(erro);
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroEncontrado = await livros.findByIdAndDelete(id);

      if (livroEncontrado !== null) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        next(new NaoEncontrado("Livro não encontrado."));
      }

    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query)
      if(busca !==null){
        const livrosResultado = livros.find(busca).populate("autor");

        req.resultado = livrosResultado;

        next();
      }else{
        console.log("Aqui")
        res.status(200).send([])
      }
      
    } catch (erro) {
      next(erro);
    }
  }
}

async function processaBusca(params){
  const {  editora,titulo,minPaginas,maxPaginas,nomeAutor  } = params;
      const regex = new RegExp(titulo,"i");
      let busca ={};
      if(editora) busca.editora = editora;
      if(titulo) busca.titulo = regex;
      //new away to apply regex => if(titulo) busca.titulo = {$regex: titulo,$option: "i"};

      if( minPaginas && maxPaginas) {
        busca.numeroPaginas = { 
          $gte:minPaginas,
          $lte: maxPaginas
      }
      }else if(minPaginas) {
        busca.numeroPaginas = {  $gte: Number(minPaginas)  }
      }else if(maxPaginas){ 
        busca.numeroPaginas = {  $lte: Number(maxPaginas)  }
      };
      //another away for above code.
      // if(minPaginas || maxPaginas) {busca.numeroPaginas ={}}
      // if(minPaginas) busca.numeroPaginas.$gte = minPaginas
      // if(maxPaginas) busca.numeroPaginas.$lte = maxPaginas
      if(nomeAutor){
        const nome = await autores.findOne({nome: nomeAutor});
        if(nome !== null){
          busca.autor = nome._id;
        }else{
          busca = null;
        }
        
      }
      return busca;
    }
export default LivroController