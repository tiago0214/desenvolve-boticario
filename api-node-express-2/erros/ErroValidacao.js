import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro) {
        const error = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");

        super(`Os seguintes erros foram encotrados: ${error}`);
    }
}

export default ErroValidacao;