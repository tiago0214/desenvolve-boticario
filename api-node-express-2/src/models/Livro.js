import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    titulo: {
      type: String,
      required: [true, "O titulo é obrigatório!"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required: [true, "O autor é obrigatório!"],
      autopopulate:true
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória!"],
      enum: {
        values: ["Alura", "Casa do código"],
        message: "A editora '{VALUE}' não é um valor válido!"
      }
    },
    numeroPaginas: {
      type: Number,
      //the function name need to be validate and it need to return true or false!
      // validate: (valor) => {
      //   return valor >= 10 && valor <= 5000;
      // }
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000. O valor: '{VALUE}' não é valido!"
      }
    }
  }
);
livroSchema.plugin(mongooseAutoPopulate);
const livros = mongoose.model('livros', livroSchema);

export default livros;
//um hipostese do auto populate, é adicionar um objeto e indicar qual é o nome que eu quero seja mostrado por padrão
//autopopulate :{select:"nome"} // ao inves de adcionar o valor true igual esta lá em cima.