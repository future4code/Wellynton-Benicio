// Abaixo estão as respostas da atividade referente a AULA 3 //

// Exercícios de interpretação de código:

/* Nº1
O primeiro console.log irá imprimir o primeiro balor atribuído a var b (que no exemplo foi 10).
O segundo console.log irá imprimir o segundo valor atribuído a var b (que no exemplo foi 5)
Isso porque a variável não foi estabelecida como const, sendo passível de alteração posterior. 
*/

/* Nº2
As variáveis terão os seus valores reatribuidos, conforme o estabelecido posteriormente, pois foram estabelecidas como let e não const. 
O console imprimirá: 20, undefined e 10. 
*/

/* Nº3
O programa divide o valor recebido por dia pela quantidade de horas trabalhadas. 

Deixaria o código estruturado da seguinte forma: 

function salarioDoUser(user) {
    let nomeUsuario = prompt("Insira o seu nome")
    let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
    let remuneracaoDia = prompt("Quanto você recebe por dia?")

    window.alert(nomeUsuario + ` , voce recebe ${remuneracaoDia/horasTrabalhadas} ` + ` reais ` + `por hora`)
} 
*/

// Exercícios de escrita de código //

/* Nº1 */

let nome 
let idade 

console.log(typeof idade)
// Foi impresso no terminal undefined pois não atribuímos nenhum valor as variáveis. N

nome = prompt("Insira o seu nome")
idade = prompt("Insira a sua idade") 

console.log(typeof nome)
console.log(typeof idade)
// como agora as variáveis recebem os valores do prompt, elas passam a armazenar algo e deixar de ser undefined e ambas nesse exemplo são instrings. 

function nomeIdade () {
    nome = prompt("Insira o seu nome")
    idade = prompt("Insira a sua idade")

    window.alert("Olá " + nome + " você tem " + idade + " anos.")
}

nomeIdade()


/* Nº2 */

alert("Responda as perguntas a seguir com SIM ou NÃO")
let pergunta1 = prompt("Você está bem hoje?")
let pergunta2 = prompt("Seu dia foi produtivo?")
let pergunta3 = prompt("Você respondeu as perguntas anteriores?")

let resposta1 = pergunta1
let resposta2 = pergunta2
let resposta3 = pergunta3

console.log(resposta1, resposta2, resposta3)

/* Nº3*/

let a = 10
let b = 25
let c = 0
c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10