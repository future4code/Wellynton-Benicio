// Exercícios de interpretação de código //

//Nº1

let valor = 0

for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// Cria um loop que vai de 0 até 5 e soma esse total de vezes (5) por ele mesmo.

//Nº2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a) É declarado o Array e definido que todos os números que forem maiores que 18 serão impressos no console. No

//b) Não precisaria usar o for...of para acessar algum elemento através do índice do array em questão. 


//Nº3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// Seria impresso no console 4 linhas com "*", cada uma com a quantidade de asteriscos correspondendo ao loop que foi executado, exemplo: 3 --> "***"

// Exercícios de escrita de código //

/*

Tentei inúmeras variações e não consegui chegar em nenhuma função envolvendo while ou for para essa questão. Consegui fazer usando if/else (já apaguei, de tanto modificar o código kkk). Por favor, manda no feedback dessa atividade a resolução dessa questão. 
*/
function gameLabenu () {
    const nameUser = prompt('Digite seu nome')
    alert(`Vamos jogar ${nameUser}`)
    const numberUser = Number(prompt(`${nameUser}, digite um número para o seu amigo/a tentar advinhar.`))
    const numberFriendUser = Number(prompt(`${nameUser}, peça para o seu amigo digitar o número que ela acha que você digitou.`))
    const arrayWithNumbersFriend = []


        while (numberFriendUser != numberUser) {
            if (numberFriendUser > numberUser ) {
                arrayWithNumbersFriend.push(numberFriendUser)
                alert(`O número digitado foi ${numberFriendUser}, porém não é o correto. Ele é maior que o número correto.`)
            } else if (numberFriendUser < numberUser) {
                arrayWithNumbersFriend.push(numberFriendUser)
                alert(`O número digitado foi ${numberFriendUser}, porém não é o correto. Ele é menor que o número correto.`)
             } else (numberFriendUser === numberUser) {
                alert('numero correto')
                alert(`o array ${arrayWithNumbersFriend.length}`)
            }
        
    }

}

gameLabenu ()


//Não fiz a questão 2 por não ter feito a questão 1. :( 
