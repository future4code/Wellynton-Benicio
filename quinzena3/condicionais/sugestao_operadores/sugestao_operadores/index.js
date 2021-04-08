// Exercícios de interpretação de código //


//Exercício 1:
/*
Caso o usuário insira números pares, a resposta será "passou no teste". Caso sejam números ímpares a resposta será "não passou no teste"
*/

//Exercício 2: 
/*
a. O código acima serve para validar várias possibilidades a uma mesma variável, sustituindo if/else.

b. O preço da fruta maçã é 2.25. 

c. Tería um erro e provavelmente o console imprimiria undefined. 
*/

//Exercício 3: 
/*
a. está definindo que toda informação que for inserida no prompt pelo usuário será um number.

b. Se fosse um 10 ---> "Esse número passou no teste" | Se fosse um -10 ---> undefined
obs: caso não ouvesse a variável sendo definida pela primeira vez dentro do scopo

c. Haverá um erro, pois a variável mensagem está sendo definida de forma inadequada no contexto do escopo. 
*/

//Exercício 4:

let idadeUser = Number (window.prompt("Digite sua idade"))

if (idadeUser > 17) {
    window.alert("Você pode dirigir")
}else {
    window.alert("Você não pode dirigir")
}


//EXERCÍCIO 5:

let turnoUser = window.prompt("Digite o turno que você estuda utilizando somente a primeira letra, dessa forma: **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).")

if (turnoUser === "m") {
    window.alert("Bom dia!")
}else if (turnoUser === "M"){
    window.alert("Bom dia!")
}else if (turnoUser === "v"){
    window.alert("Boa tarde!") 
}else if (turnoUser === "V"){
    window.alert("Boa tarde!") 
}else if (turnoUser === "n"){
    window.alert("Boa noite!")
}else (turnoUser === "N")
    window.alert("Boa noite!")



//EXERCÍCIO 6:

let turnoUser = window.prompt("Digite o turno que você estuda utilizando somente a primeira letra, dessa forma: **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).")

switch (turnoUser) {
    case "m":
        window.alert("Bom dia!");
        break;
    case "M":
        window.alert("Bom dia!");
        break;
    case "v":
        window.alert("Boa tarde!");
        break;
    case "V":
        window.alert("Boa tarde!");
        break;
    case "n":
        window.alert("Boa noite!");
        break;
    case "N":
        window.alert("Boa noite!");
        break;             
    default:
        window.alert ("Digite conforme solicitado.");
}


//EXERCÍCIO 7:

let escolhaDoFilme = window.prompt("Digite o gênero do filme a ser assistido:")
let valorDoFilme = Number (window.prompt("Agora, digite o valor do filme a ser assistido:"))

if (escolhaDoFilme === "fantasia" && valorDoFilme < 16) {
    window.alert("Bom filme!")
}else {
    window.alert("Escolha outro filme!")
}
