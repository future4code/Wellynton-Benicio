// Exercícios de interpretação de código //

// N1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) Primeiro seria exibido o resultado da multiplicação de 2 (que foi colocado como parâmetro) e 5. Na sequência o resultado da multiplicação entre 10 (parâmetro) e 5. 

// b) Nada, pois estamos invocando a função para ser exibida no console. Na

// N2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a) validar se existe a palavra cenoura no texto digitado pelo usuário, retornando true ou false. 

// b) 
// i - true
// ii - true
// iii - false 


// Exercícios de escrita de código //

// N1
// a)

function sobreMim () {
    console.log("Eu sou Wellynton, tenho 25 anos, moro em São Paulo e sou estudante na Labenu.")
}

// b) 

function descrevendoUser (nome, idade, cidade, profissao) {
    nome = prompt("Digite o seu nome")
    idade = Number(prompt("Digite sua idade"))
    cidade = prompt("Digite a sua cidade")
    profissao = prompt("Digite sua profissão")

    alert(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${profissao}`)
}

descrevendoUser ()

// N2
// a)

function soma (num1, num2) {
    let soma = num1 + num2
    console.log(soma)
  }
  
  soma(2, 4)

// b) 

function maiorIgual (num1, num2) {
    let maiorOuIgual = num1 >= num2
    console.log(maiorOuIgual)
  }
  
  maiorIgual(8, 4)

// c) 

function parOuImpar (num) {
    let descoberta = num % 2 === 0 
    console.log(descoberta)
  }
  
  parOuImpar(8)

  // d) 

  function tamanhoString (textoUser) {
    let qualTamanho = textoUser.toLowerCase()
    console.log(qualTamanho.length)
  }
  
  tamanhoString(prompt('Digite aqui qualquer coisa'))


// N3

function operacoesMatematicas () {
    let num1 = Number(prompt('Insira um numero'))
    let num2 = Number(prompt('Insira outro numero, menor do que o primeiro'))

    const soma = num1 + num2
    const diferenca = num1 - num2
    const multiplicacao = num1 * num2
    const divisao = num1 / num2
    
    console.log(`Os numeros inseridos foram ${num1} e ${num2}`)
    console.log(`O resultado da soma é: ${soma}.`)
    console.log(`A diferença entre os dois é: ${diferenca}.`)
    console.log(`O resultado da multiplicação é: ${multiplicacao}.`)
    console.log(`O resultado da divisão é: ${divisao}.`)
}

operacoesMatematicas() 



