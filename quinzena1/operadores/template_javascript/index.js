// Exercícios de interpretação de código //

// Nº1

const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) //Resultado será true


resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //Resultado será false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //Resultado será false

console.log("d. ", typeof resultado) // Se estiver se referindo ao let resultado e não aos que vieram em sequência, o console irá informar que let resultado é um booleano. 

// Nº2 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero) //Como ele utilizou o prompt para capturar os valores, não ocorria a soma e sim a concatenação das intrings. 

console.log(soma)

// Nº3

// Podemos "forçar" com que os valores do prompt sejam interpretados como um number, resolvendo o problema. Outra auternativa seria já trabalhar com valores pré-estabelecidos, mas poderia fugir do contexto do projeto em questão. 



// Exercícios de escrita de código //

// Nº1

function meuPrimeiroPrograma(params) {
    let nomeUsuario = prompt("Digite o seu nome!")
    let idadeUsuario = prompt(nomeUsuario + ", agora digite a sua idade.")    
    let idadeMelhorAmigs = prompt(nomeUsuario + ", agora digite a idade do seu melhor amigo/a.") 
    let comparaIdades = Number(idadeUsuario) === Number(idadeMelhorAmigs)
    let diferencaIdade = Number(idadeUsuario) - Number(idadeMelhorAmigs)

    console.log("Sua idade é maior do que a do seu melhor amigo?  " + comparaIdades)
    console.log("A diferença entre as idades é de: " + diferencaIdade + " anos.")
}
meuPrimeiroPrograma()

// Nº2

function meuSegundoPrograma(params) {
    let nomeUsuario = prompt("Digite o seu nome!")
    let insiraPar = prompt(nomeUsuario + ", agora digite um número par.")
    let restoDivisao = Number(insiraPar) % 2

    console.log(restoDivisao)
    
}
meuSegundoPrograma()

// Como sempre inserimos um número par, o resto da divisão por 2 sempre será igual a 0. 
// Quando inserimos um número ímpar o resultado é sempre igual a 1. 

// Nº3

function meuTerceiroPrograma() {
    let nomeUser = prompt("Digite o seu nome!")
    let idadeUser = prompt(nomeUser + ", agora digite a sua idade.")  
    const mesesVidaUser = Number(idadeUser) * 12
    const diasVidaUser = Number(idadeUser) * 365
    const horasVidaUser = Number(idadeUser) * 365 * 24

    console.log(nomeUser + " sua idade em meses é equivalente a: " + mesesVidaUser + " meses.")
    console.log(nomeUser + " sua idade em dias é equivalente a: " + diasVidaUser + " dias.")
    console.log(nomeUser + " sua idade em meses é equivalente a: " + horasVidaUser + " horas.")
}
meuTerceiroPrograma()

// Nº4

function meuQuartoPrograma() {
    let nomeUser = prompt("Digite o seu nome!")
    let primeiroNumero = prompt(nomeUser + ", agora digite um número.")  
    let segundoroNumero = prompt(nomeUser + ", agora digite um outro número.")  

    const boolean1 = Number(primeiroNumero) > Number(segundoroNumero)
    const boolean2 = Number(primeiroNumero) === Number(segundoroNumero)
    const boolean3 = Number(primeiroNumero) % Number(segundoroNumero) === 0
    const boolean4 = Number(segundoroNumero) % Number(primeiroNumero) === 0

    console.log("O primeiro numero é maior que segundo? " + boolean1)
    console.log("O primeiro numero é igual ao segundo? " + boolean2)
    console.log("O primeiro numero é divisível pelo segundo? " + boolean3)
    console.log("O segundo numero é divisível pelo primeiro? " + boolean4)

}
meuQuartoPrograma()
