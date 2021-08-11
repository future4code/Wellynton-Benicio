//Boas vindas ao usuário
window.alert("Bem vindo ao BlackJack!")

//Aqui o usuário escolhe se ele irá ou não dar inicio ao jogo. Caso ele digite ok, inicia uma nova rodada, caso contrário ele receberá uma mensagem do sistema.
let start = confirm("Vamos começar uma nova rodada?");
console.log((start))
if (start == true) {
   startGame();
}else{
   window.alert("O jogo acabou! Uma pena, quem sabe na próxima. :(");
}

//Esta função executa o jogo. 
//Player1 é o usuário e Player2 é o sistema/computador. 

 function startGame(){
    let player1Carta1 = comprarCarta();
    window.alert("Sua primeira carta é:  " + player1Carta1.texto)
    let player2Carta1 = comprarCarta();
    window.alert("A primeira carta do seu oponente é:  " + player2Carta1.texto)
    let player1Carta2 = comprarCarta();
    window.alert("Sua segunda carta é:  " + player1Carta2.texto)
    let player2Carta2 = comprarCarta();
    window.alert("A segunda carta do seu oponente é:  " + player2Carta2.texto)

    let resultado1 = player1Carta1.valor + player1Carta2.valor
    let resultado2 = player2Carta1.valor + player2Carta2.valor
    if (resultado1 > resultado2) {
      console.log("Usuário - cartas: " + player1Carta1 + player1Carta2 + " -  " + resultado1)
      console.log("Computador - cartas: " + player2Carta1 + player2Carta2 + " -  " + resultado2)
      console.log("O usuário ganhou.")
      window.alert("Parabéns, você ganhou com um total de:  " + resultado1 + "  pontos.")
    }else if(resultado1 < resultado2){
      console.log("Usuário - cartas: " + player1Carta1 + player1Carta2 + " -  " + resultado1)
      console.log("Computador - cartas: " + player2Carta1 + player2Carta2 + " -  " + resultado2)
      console.log("O computador ganhou.")
      window.alert("Poxa, seu oponente ganhou com um total de:  " + resultado2 + "  pontos.")
   }else {
      console.log("Usuário - cartas: " + player1Carta1 + player1Carta2 + " -  " + resultado1)
      console.log("Computador - cartas: " + player2Carta1 + player2Carta2 + " -  " + resultado2)
      console.log("Houve empate.")
      window.alert("Vocês empataram, pois a pontuação de ambos foi: " + resultado1)
   }
}