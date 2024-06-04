import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

async function paginar(req,res,next){
  let {limite = 5, pagina = 1, ordenacao = "_id:-1"} = req.query; 
  //i can write on my URL in this away : campoOrdenacao = "_id", ordem = -1
  let [campoOrdenacao, ordem] = ordenacao.split(":");
  limite = parseInt(limite);
  pagina = parseInt(pagina);
  ordem = parseInt(ordem);
  console.log(campoOrdenacao,ordem);

  let resultado = req.resultado;
  console.log(resultado);

  if(limite > 0 && pagina >0){
    let resultadoPaginado = await resultado.find()
    .sort({ [campoOrdenacao]: ordem})
    .skip((pagina - 1) * limite)
    .limit(limite)
    .exec();
    res.status(200).json(resultadoPaginado);
  }else{
    next(new RequisicaoIncorreta);
  }
}

export default paginar;