//Exercício 1

function inverteArray(array) {
   let inverter = [0, 8, 23, 16, 10, 15, 41, 12, 13]
   var invertido = inverter. slice(0). reverse();
   console. log("este é o array original:  " + inverter); // [1, 2, 3, 4, 5]
   console. log("este é o array invertido:  " + invertido); // [5, 4, 3, 2, 1] 
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let meuArrayDeNumbers = [1, 2, 3, 4, 6, 7, 8, 9]
   for (let i = 0; i < meuArrayDeNumbers.length; i++) {
      const sorteioArray = meuArrayDeNumbers[i];
      if (sorteioArray % 2 === 0) {
         let arrayElevado = [sorteioArray * sorteioArray]
         console.log("O número  " + sorteioArray + " elevado é igual a: " + arrayElevado)
      }else {
         console.log("O número  " + sorteioArray + "  é ímpar e não pode ser elevado.")
      }
   }
}

//Exercício 3

function retornaNumerosPares (array) {
   let meuArrayDeNumbers = [1, 2, 3, 4, 6, 7, 8, 9]
   let arrayPares = []
   for (let i = 0; i < meuArrayDeNumbers.length; i++) {
      let sorteioArray = meuArrayDeNumbers[i];
      if (sorteioArray % 2 === 0) {
         arrayPares.push(sorteioArray)
         console.log(arrayPares)      
      }
   }
}

//Exercício 4

function retornaMaiorNumero(array) {
   let meuArrayDeNumbers = [1, 2, 3, 4, 6, 7, 8, 9]
   let maiorDeTodos = []
   for (let i = 0; i < meuArrayDeNumbers.length; i++) {
      let sorteioArray = meuArrayDeNumbers[i];
      if (sorteioArray >= 9) {
         maiorDeTodos.push(sorteioArray)
         console.log("O número  " + maiorDeTodos + "  é o maior de todos os números no array")      
      }
   }
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   let meuArrayDeNumbers = [1, 2, 3, 4, 6, 7, 8, 9]
   console.log("O número de elementos no meu array é de " + meuArrayDeNumbers.length + " elementos.")
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
//A)
   let aswerA = booleano1 && booleano2 && !booleano4
   console.log(aswerA)

//B)
   let aswerB = (booleano1 && booleano2) || !booleano3
   console.log(aswerB)  
//C)
   let aswerC = (booleano2 || booleano3) && (booleano4 || booleano1)
   console.log(aswerC)  
//D)
   let aswerD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   console.log(aswerD)  
//E)
   let aswerE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   console.log(aswerE)  
}

//Exercício 7

function retornaNNumerosPares(n) {
   let arrayN = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
   let varN = Math.floor(Math.random() * 10 + 1)
   let newArrayN = []
   for (let i = 0; i < arrayN.length; i++) {
      console.log(arrayN[i * varN])
   }
}


// Exercício 8

function checaTriangulo(a, b, c) {
  let medidaA = Math.floor(Math.random() * 10 + 1)
  let medidaB = Math.floor(Math.random() * 10 + 1)
  let medidaC = Math.floor(Math.random() * 10 + 1)

  if (medidaA === medidaB === medidaC) {
     console.log("O triângulo é Equilátero.")
  } else if (medidaA === medidaB || medidaA === medidaC || medidaB === medidaC){
   console.log("O triângulo é Isósceles.")     
  } else (medidaA !== medidaB !== medidaC) 
   console.log("O triângulo é Escaleno.")   
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let numberA = 15
   let numberB = 30
   let objetoComparacao1 = {
      maiorNumero: numberB, 
      maiorDivisivelPorMenor: true, 
      diferenca: numberB - numberA
   }

   if (numberB % numberA === 0 && numberB > numberA) {
      console.log(objetoComparacao1)
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   const arraySugerido = [-1, 2, 34, 26, 15, 50, 46, 102]
   let segundoMenor = arraySugerido[1]
   let segundoMaior = arraySugerido[5]

   console.log(segundoMenor, segundoMaior)
}

//Exercício 11

function ordenaArray(array) {
   const arraySugerido = [20, 13, -1, 2, 5, 49, -40, 10, 70, 5]
   console.log(arraySugerido)
   arraySugerido.sort((a, b) => a-b)
   console.log(arraySugerido)
}

// Exercício 12

function filmeFavorito() {
   const filmeFavoritoAstrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    console.log(filmeFavoritoAstrodev)
}

// Exercício 13

function imprimeChamada() {
   const filmeFavoritoAstrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    console.log("Venha assistir ao filme " + filmeFavoritoAstrodev.nome + " do ano de " + filmeFavoritoAstrodev.ano + " dirigido por " + filmeFavoritoAstrodev.diretor + " e estrelado pelos seguintes atores: " + filmeFavoritoAstrodev.atores[0], + " , " + filmeFavoritoAstrodev.atores[1], + " , " + filmeFavoritoAstrodev.atores[2], + " e " +filmeFavoritoAstrodev.atores[3])
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const dimensoesRetangulo = {
      largura: 10,
      altura: 20,
      perimetro: 60,
      area: 200
  }
  console.log(dimensoesRetangulo)
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   const dadosUser = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
    }

    let dadosUserAnonimo = new Object({
      nome: "Anônimo",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
    });

    console.log(dadosUserAnonimo)
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 } 
 ]
 
 // Exercício 16, letra A
 
 function maioresDe18(arrayDePessoas) {
 let buscador;
    let maioresDe18 = []   
    for (let i = 0; i < arrayDePessoas.length; i++) {
 buscador = arrayDePessoas[i];
 
   if (buscador.idade >= 18) {
       maioresDe18.push(buscador)
       
    }
 
    }
 console.log(maioresDe18)
 }

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   let buscador;
   let menoresDe18 = []   
   for (let i = 0; i < arrayDePessoas.length; i++) {
      buscador = arrayDePessoas[i];
      
      if (buscador.idade <= 17) {
         menoresDe18.push(buscador)
      }
 
   }
console.log(menoresDe18)
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const arraySugerido = [1, 2, 3, 4, 5, 6]

   for (let i = 0; i < arraySugerido.length; i++) {
      let multiplicador = arraySugerido[i] * 2;
      console.log(multiplicador)
   }
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const arraySugerido = [1, 2, 3, 4, 5, 6]

   for (let i = 0; i < arraySugerido.length; i++) {
      let multiplicador = String(arraySugerido[i] * 2);
      console.log(typeof(multiplicador))
      console.log(multiplicador)
   }
}

// Exercício 17, letra C

function verificaParidade(array) {
   const arraySugerido = ["1", "2", "3", "4", "5", "6"]
   
   console.log(arraySugerido[0] + " é ímpar")
   console.log(arraySugerido[1] + " é par")
   console.log(arraySugerido[2] + " é ímpar")
   console.log(arraySugerido[3] + " é par")
   console.log(arraySugerido[4] + " é ímpar")
   console.log(arraySugerido[5] + " é par")
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let buscador;
   let atendemOsCriterios = []   
   for (let i = 0; i < pessoas.length; i++) {
      buscador = pessoas[i];
      if (buscador.idade >= 14 && buscador.idade <= 60 && buscador.altura >= 1.5) {
         atendemOsCriterios.push(buscador)
   }
}
 console.log(atendemOsCriterios)
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let buscador;
   let naoAtendemOsCriterios = []   
   for (let i = 0; i < pessoas.length; i++) {
      buscador = pessoas[i];
      if (buscador.idade <= 14 || buscador.idade >= 60 || buscador.altura <= 1.5) {
         naoAtendemOsCriterios.push(buscador)
   }
}
 console.log(naoAtendemOsCriterios)
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
   consultasNome.sort(function (a, b) {
	
      return (a.consultasNome > b.consultasNome) ? 1 : ((b.consultasNome > a.consultasNome) ? -1 : 0);
    
   })
   console.log(consultasNome)
}
