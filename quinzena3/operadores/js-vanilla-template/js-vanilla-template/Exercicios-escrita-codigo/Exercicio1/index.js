/*
Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c. Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false). Para isso, use a variável criada no item (b) para definir qual será a resposta.
d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)
*/

let idadeUsuario = window.prompt("Qual a sua idade? Digite:")

let idadeAmigo = window.prompt("Qual a idade do seu/sua melhor amigo/a? Digite:")

let resultado = idadeUsuario === idadeAmigo 

const diferencaIdade = idadeUsuario - idadeAmigo

window.alert("Sua idade é maior do que a do seu melhor amigo? " + resultado)

window.alert("a diferença de idade entre vocês é de " + diferencaIdade)


