// Exercícios de análise

/*
EXERCÍCIO 01:

A) o valor 10;

B) Aconteceria o mesmo, pois a função permaneceu a mesma, somente a forma de envocá-la que mudou. Seria impresso respectivamente 10 e 50;

EXERCÍCIO 02:

A) A função irá "sair" os 3 primeiros elementos do arrayDeNomes, pois dentro da função foi definido um loop de repetição começando com 0 e que vai até 2, de forma a acessar o conteúdo do array. 

B) Ou haveria um erro de sintax ou seria impresso Amanda, Caio e Amanda.

EXERCÍCIO 03:

É definido uma função para incluir elementos em um array toda vez que o resto da divisão de x com 2 for igual a 0. Se isso ocorrer, é multiplicado o valor de x por ele mesmo e esse valor é inserido no array. Quando isso é executado, a função retorna o valor do array. 

*/

//EXERCÍCIO 04:

//A)
function sobreWellynton() {
    alert("Eu sou Wellynton, tenho 25 anos, moro em São Bernardo do Campo, atuo profissionalmente como Account Executive e sou estudante Labenu :");
    console.log("Eu sou Wellynton, tenho 25 anos, moro em São Bernardo do Campo, atuo profissionalmente como Account Executive e sou estudante Labenu :");
}

//B)
function sobreWellynton2(nome, idade, cidade, ocupacao) {
    let name = "Wellynton"
    let age = 25
    let city = "São Bernardo do Campo"
    let occupation = Boolean(true)

    if (occupation == true) {
        console.log("Eu sou  " + name + " tenho  " + age + "  anos, moro em  " + city + ", além de trabalhar e estudar.")

    }
}

sobreWellynton2()

//EXERCÍCIO 05:

//A)
function somaDeDoisNumeros(numero1, numero2) {
    let somaDosParametros = numero1 + numero2
    console.log(somaDosParametros)
}

somaDeDoisNumeros(5, 2)

//B)

function returnBoolean(numero1, numero2) {
    if (numero1 === numero2) {
        console.log("São Iguais")
    } else if (numero1 > numero2) {
        console.log(numero1 + "é maior")
    } else {
        console.log(numero2 + "é maior")
    }
}

returnBoolean(2, 2)

//C)

function functionString(string) {
    let stringRepeat = "Vamos repetir isso aqui 10 vezes."
    for (let repeat = 0; repeat < 10; repeat++) {
        console.log(stringRepeat)
    }
}

functionString()

//EXERCÍCIO 06:

//A) 
function recebeArrayNumbers() {
    const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    console.log(array)
}

recebeArrayNumbers()

//B) 
function parOuImpar(numero) {
    let array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

    const sorteio = array[Math.floor(Math.random() * array.length)];

    if (sorteio % 2 === 0) {
        alert("Este número é par ---> " + sorteio)
        console.log(Boolean("Este número é par --->  " + sorteio))
    } else {
        alert("Este número é impar --->  " + sorteio)
        console.log(Boolean("Este número é impar ---> " + sorteio))
    }
}

parOuImpar()

//C)

let numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function buscarNumerosPares(value) {
    if (value % 2 === 0)
        return value
}
let numerosPares = numeros.filter(buscarNumerosPares)
console.log(numerosPares)

//D)
//Eu não consegui concatenar as funções








