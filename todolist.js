const campoTarefa = document.getElementById("campo-tarefa")
const listaTarefas = document.getElementById("lista-tarefas")

function adicionarTarefa(){
    const textoDaTarefa = campoTarefa.value.trim();

    if (textoDaTarefa === ""){
        alert("Por favor, digite uma tarefa...")
        return;
    }

    const novoItemHTML = `<li class="item-lista" onClick="marcarComoConcluida(this)">
    <span>${textoDaTarefa}</span>
    <button class="botao-remover" onclick="removerTarefa(event, this)">Remover</button>
    </li>`;

    listaTarefas.innerHTML += novoItemHTML;

    campoTarefa.value = '';
    campoTarefa.focus();
}

function marcarComoConcluida(elemento){
    elemento.classList.toggle("tarefa-concluida");
}

function removerTarefa(evento, botao){
    evento.stopPropagation(evento, botao);

    const itemParaRemover = botao.parentElement;
    itemParaRemover.remove()
}


function verificarTecla(evento){
    if (evento.key === "Enter"){
        adicionarTarefa()}
}

