// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano que estamos')
  const anoNascimento = prompt('Digite o seu ano de nascimento')

  console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
  const pesoUser = prompt('Digite o seu peso')
  const alturaUser = prompt('Digite a sua altura')

  console.log(Number(pesoUser) / (Number(alturaUser) * Number(alturaUser)));
}

// Exercício 4 - Por algum motivo não está passando no teste (testei no code pen e está rodando como o esperado)
function imprimeInformacoesUsuario() {
  const nomeUser = prompt('Digite o seu nome')
  const idadeUser = prompt('Digite a sua idade')
  const emailUser = prompt('Digite o seu e-mail')

  console.log(`Meu nome é ${nomeUser} , tenho ${Number(idadeUser)} anos, e o meu email é ${emailUser}`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const arrayDaFunction = []
  let coletaArray1 = arrayDaFunction.push(prompt('Digite aqui a sua primeira cor favorita'))
  let coletaArray2 = arrayDaFunction.push(prompt('Digite aqui a sua segunda cor favorita'))
  let coletaArray3 = arrayDaFunction.push(prompt('Digite aqui a sua terceira cor favorita'))

  console.log(arrayDaFunction)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let stringUser = prompt('Digite qualquer coisa')

  console.log(stringUser.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoEspetaculo = prompt('Digite o custo do espetáculo')
  let valorIngresso = prompt('Digite o valor do ingresso para o espetáculo')

  console.log(Number(custoEspetaculo) / Number(valorIngresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let stringOne = prompt('Digite qualquer coisa')
  let stringTwo = prompt('Digite qualquer coisa')

  const comparacao = stringOne.length == stringTwo.length

  console.log(comparacao)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let stringOne = prompt('Digite qualquer coisa')
  let stringTwo = prompt('Digite qualquer coisa')

  const comparacao = stringOne.toUpperCase() == stringTwo.toUpperCase()

  console.log(comparacao)
}

// Exercício 10 - Por algum motivo não está passando no teste (testei no code pen e está rodando como o esperado)
function checaRenovacaoRG() {
  const anoAtual = prompt('Digite o ano que estamos')
  const anoNascimento = prompt('Digite o seu ano de nascimento')
  const anoEmissaoIdentidade = prompt('Digite o ano da emissão da sua identidade')
  const faixaEtaria = Number(anoAtual) - Number(anoNascimento)
  const renovacao = Number(anoAtual) - Number(anoEmissaoIdentidade)
  
  if (faixaEtaria <= 20) {
    console.log(renovacao > 5)
  } else if (faixaEtaria > 20 || faixaEtaria <= 50){
    console.log(renovacao > 10)
  } else {
    console.log(renovacao > 15)
  }
}  

// Exercício 11 - Por algum motivo não está passando no teste (testei no code pen e está rodando como o esperado)
function checaAnoBissexto() {
  let anoUser = prompt('Digite um ano para descobrir de ele é bissexto:')
  let bissexto = (Number(anoUser) % 400 == 0) || (Number(anoUser) % 4 == 0 && Number(anoUser) % 100 != 0)
 
  console.log(bissexto)

}

// Exercício 12- Por algum motivo não está passando no teste (testei no code pen e está rodando como o esperado)
function checaValidadeInscricaoLabenu() {
  let idade = window.confirm('Você tem mais de 18 anos?')
  let escolaridade = window.confirm('Você tem mais de 18 anos?')
  let disponibilidade = window.confirm('Você possui disponibilidade exclusiva durante os horários do curso?')
  const aprovacao = idade && escolaridade && disponibilidade

  console.log(aprovacao)
}
