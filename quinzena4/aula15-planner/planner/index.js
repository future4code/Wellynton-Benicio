let tarefas = []

function imprimindoAsTarefas(){
    console.log(tarefas.length)
    for (let i = 0; i < tarefas.length; i++){
        let imprimir = document.getElementById(tarefas[i].day).innerText = tarefas[i].text
        let tarefa = document.createElement('p');
        let texto  = document.createTextNode(imprimir);
        tarefa.appendChild(texto);
        let dia = document.getElementById(tarefas[i].day) 
        console.log(tarefa)
        dia.appendChild(tarefa);
    }
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = ""
}


function inputUser() {
    let tarefaUser = document.getElementById("tarefa").value;
    let diaTarefaUser = document.getElementById("dias-semana").value;

    let tarefa = {
        day: diaTarefaUser,
        text: tarefaUser
    }
    
    tarefas.push(tarefa)

    imprimindoAsTarefas()
}