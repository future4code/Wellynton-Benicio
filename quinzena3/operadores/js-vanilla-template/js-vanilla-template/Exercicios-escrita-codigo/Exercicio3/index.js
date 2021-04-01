/*
Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela
*/

let listaDeTarefas = []

window.alert("Adicione a seguir as 3 tarefas que você precisa realizar no dia")

let atividade1 = listaDeTarefas.push (window.prompt("Qual a primeira atividade? Digite:"))
let atividade2 = listaDeTarefas.push (window.prompt("Qual a segunda atividade? Digite:"))
let atividade3 = listaDeTarefas.push (window.prompt("Qual a terceira atividade? Digite:"))

window.alert("Suas atividades do dia são  " + listaDeTarefas)

window.alert("As suas atividades são representadas por números, sendo eles 0, 1 e 2. Digite um dos desses números a seguir.")

const remocaoAtividade = window.prompt("digite:")

listaDeTarefas.splice(remocaoAtividade)

window.alert("Suas atividades do dia agora são:  " + listaDeTarefas);





