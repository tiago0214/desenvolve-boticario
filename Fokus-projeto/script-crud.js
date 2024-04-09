const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const btnCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');

const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodas = document.querySelector('#btn-remover-todas');

const textArea = document.querySelector('.app__form-textarea');
const ulTarefa = document.querySelector('.app__section-task-list');

let tarefaSelecionada = null;
let liTarefaSelecionada = null;

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function limparFormulario() {
    textArea.value = '';
    formAdicionarTarefa.classList.add('hidden');
}

//retorna uma tarefa
function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('app__section-task-list-item-description');

    paragrafo.innerText = tarefa.descricao;

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    botao.onclick = () => {
        const novaDescricao = prompt('Qual é o novo nome da tarefa?');
        if (novaDescricao) {
            paragrafo.textContent = novaDescricao;
            tarefa.descricao = novaDescricao;
            atualizarTarefas();
        }
    }

    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', '/imagens/edit.png');

    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    botao.append(imagemBotao);

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete');
        botao.setAttribute('disabled', 'true');
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active')
                .forEach(element => {
                    element.classList.remove('app__section-task-list-item-active');
                })

            if (tarefaSelecionada == tarefa) {
                paragrafoDescricaoTarefa.textContent = '';
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
                return;
            }
            paragrafoDescricaoTarefa.textContent = tarefa.descricao;

            tarefaSelecionada = tarefa;
            liTarefaSelecionada = li;
            li.classList.add('app__section-task-list-item-active');
        }
    }

    return li;
}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
});

//limpar tarefa
btnCancelar.addEventListener('click', limparFormulario)

//salva no localStorage
formAdicionarTarefa.addEventListener('submit', (event) => {
    event.preventDefault();

    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefa.append(elementoTarefa);

    textArea.value = '';
    formAdicionarTarefa.classList.add('hidden');

    atualizarTarefas();
});

//percorre a lista e adiciona na tela.
tarefas.forEach((tarefa) => {
    const tarefaElemento = criarElementoTarefa(tarefa);
    ulTarefa.append(tarefaElemento);
});

document.addEventListener('FocoFinalizado', () => {
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'true');

        tarefaSelecionada.completa = true;
        atualizarTarefas();
    }
});

const removerTarefas = (somenteCompletas) => {
    const selector = somenteCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item";
    document.querySelectorAll(selector).forEach(element => {
        element.remove()
    });

    tarefas = somenteCompletas ? tarefas.filter(tarefas => !tarefas.completa) : [];
    atualizarTarefas();
}

btnRemoverConcluidas.onclick = () => removerTarefas(true);
btnRemoverTodas.onclick = () => removerTarefas(false);