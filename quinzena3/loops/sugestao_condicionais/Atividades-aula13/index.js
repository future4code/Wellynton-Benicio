// Exercícios de interpretação de código //

/*

EXERCÍCIO 1:

//A ideia é fazer com que haja um loop até que seja alcançado o valor de 5. Porém, como foi inserido o valor de i a variavel valor, o console irá imprimir o valor 10.   

EXERCÍCIO 2:

a) Serão impressos todos os numeros que forem maior que 18 que compõem o array lista.push

b) Acredito que não. Em breve pesquisa na documentação teríamos que incluir um findIndex(). 

EXERCÍCIO 3:

*/

//A

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for (let k = 0; k < arrayOriginal.length; k++) {
        console.log(arrayOriginal[k])
    }

//B

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for (let k = 0; k < arrayOriginal.length; k++) {
        console.log((arrayOriginal[k] / 10))
    }


//C

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    let newArray = arrayOriginal.filter(index => { 
        if( index%2 == 0){
        return index;
     }
    })

    for (let k = 0; k < newArray.length; k++) {
        console.log((newArray[k] / 10))
    }

//D

function arrayString(element, index) {
    console.log("O elemento do índex   " + index + "  é: " + element);
}

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55].forEach(arrayString);

//E

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let max = 0;

let min = arrayOriginal[0];
for(let k = 0; k < arrayOriginal.length; k++){
    if(arrayOriginal[k] > max){
        max = arrayOriginal[k]
    }
    if(arrayOriginal[k] < min){
        min = arrayOriginal[k]
    }
}

console.log('maximo: ' + max);
console.log('minimo: ', min);