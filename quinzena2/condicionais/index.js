// Exercícios de interpretação de código //

//Nº1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//a) O código realiza a captura de um número por parte do usuário. Se o número for par, ele passa no teste, caso for ímpar, ele não passa. 

//b) Números pares. 

//c) Números ímpares. 

//Nº2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) O código acima serve para dar o preço da lista de alimentos que está relacionada dentro do switch-case. 

//b) O preço da fruta "Maçã": preco = 2.25

//c) Será impresso Pêra, porém com o valor de default.


//Nº3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) Está armazenando em uma variavel o valor inserido pelo usuário, porém ele está sendo convertido de string para Number. 

//b) Se digitar 10, vai imprimir que passou no teste, seguido de uma mensagem de erro, pois a variavel mensagem está em um escopo não acessível. Se for digitado -10 será impressa somente a mensagem de erro. 

//c) sim. Pois a variável mensagem não está dentro do escopo global. Se



// Exercícios de escrita de código //

// Nº1

function qualificacaoParaDirigir () {

    const nomeUsuario= prompt('Digite o seu nome')
    const idadeUsuario = Number(prompt('Digite o seu nome'))

    if (idadeUsuario >= 18) {
        alert(`Parabéns ${nomeUsuario}, você já pode dirigir!`)
    }else {
        alert(`${nomeUsuario}, você precisa completar 18 anos para poder dirigir`)
    }

}

qualificacaoParaDirigir()


// Nº2

function horarioEstudoUsuario () {
    const nomeUsuario = prompt('Digite o seu nome')
    const turnoUsuario = prompt('Digite o turno que você estuda. Digite  M (matutino), V (Vespertino) ou N (Noturno)')
    const newTurnoUsuario = turnoUsuario.toUpperCase()

    if (newTurnoUsuario === 'M') {
        alert(`Bom dia ${nomeUsuario}.`)
    } else if (turnoUsuario === 'V') {
        alert(`Boa tarde ${nomeUsuario}.`)
    } else if (turnoUsuario === 'N') {
        alert(`Boa noite ${nomeUsuario}.`)
    } else {
        alert(`Insira um dos dados requeridos, ${nomeUsuario}.`)
    }

}

horarioEstudoUsuario ()

//Nº3

function horarioEstudoUsuario () {
    const nomeUsuario = prompt('Digite o seu nome')
    const turnoUsuario = prompt('Digite o turno que você estuda. Digite  M (matutino), V (Vespertino) ou N (Noturno)')
    const newTurnoUsuario = turnoUsuario.toUpperCase()

    switch (newTurnoUsuario) {
        case
        'M'
        :alert(`Bom dia ${nomeUsuario}.`)
        break;
        case
        'V'
        :alert(`Boa tarde ${nomeUsuario}.`)
        break;
        case
        'N'
        :alert(`Boa noite ${nomeUsuario}.`)
        break;  
    }
}

horarioEstudoUsuario ()

//Nº4

function escolhaFilme () {
    const nomeUsuario = prompt('Digite o seu nome')
    const filmeUsuario = prompt('Digite o gênero do filme que vai assistir')
    const newFilmeUser = filmeUsuario.toLowerCase();
    const valorIngresso = Number(prompt('Digite o valor do ingresso'))

    if (newFilmeUser === 'fantasia' && valorIngresso <= 15) {
        alert(`Bom filme ${nomeUsuario}`)
    } else {
        alert(`Escolha outro filme ${nomeUsuario} :(`)
    }

}

escolhaFilme()