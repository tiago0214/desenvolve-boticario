const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefa = document.querySelector('.app__section-task-list');

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
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
        paragrafo.textContent = novaDescricao;

        tarefa.descricao = novaDescricao;
        atualizarTarefas();
    }

    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', '/imagens/edit.png');

    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    botao.append(imagemBotao);

    return li;
}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
});

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