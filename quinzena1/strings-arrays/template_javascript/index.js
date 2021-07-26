// Exercícios de interpretação de código // es

// Nº1: 

let array
console.log('a. ', array)
// Irá imprimir no console: a. undefined

array = null
console.log('b. ', array)
// Irá imprimir no console: b. undefined

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// Irá imprimir no console: c. 11

let i = 0
console.log('d. ', array[i])
// Irá dar erro no console, pois array não foi definido. Porém, se estiver se referindo ao array anterior, irá exibir no console: d. 3. 

array[i+1] = 19
console.log('e. ', array)
// Irá dar erro no console. 

const valor = array[i+6]
console.log('f. ', valor)
// Irá dar erro no console. 


// Nº2:

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//O código solicita ao usuário que introduza uma frase e a mesma será exibida no console em caixa alta e todas as vogais A serão substituídas pela volgal I. além de aparecer ao final da frase o tamanho da estring, considerando os espaços. 


// Exercícios de escrita de código //

// Nº1: 

function primeiroPrograma () {
    let nomeUser = prompt('Olá, digite o seu nome:')
    let emailUSer = prompt(`${nomeUser}, agora digite o seu e-mail:`)

    alert(`${nomeUser}, seu e-mail foi cadastrado com sucesso!`)
}

// Nº2: 

const minhasComidasFavoritas = ["Hamburguer", "Macarronada", "Parmegiana", "Açai", "Coxinha"]

alert(minhasComidasFavoritas);

//

const minhasComidasFavoritas = ["Hamburguer", "Macarronada", "Parmegiana", "Açai", "Coxinha"]

alert('Essas são as minhas comidas favoritas:' +  minhasComidasFavoritas.join('\n'))
// Ou da seguinte forma: 
console.log('Essas são as minhas comidas favoritas:')
console.log(minhasComidasFavoritas[0])
console.log(minhasComidasFavoritas[1])
console.log(minhasComidasFavoritas[2])
console.log(minhasComidasFavoritas[3])
console.log(minhasComidasFavoritas[4])

function trocandoComidas () {
    const minhasComidasFavoritas = ["Hamburguer", "Macarronada", "Parmegiana", "Açai", "Coxinha"]
    let novaComida = prompt("Digite o nome de uma comida que você gosta:")

    minhasComidasFavoritas.splice(1,1)
    minhasComidasFavoritas.push(novaComida)

    console.log(minhasComidasFavoritas)
    //ou
    alert(`Essas são as minhas novas comidas favoritas: ${minhasComidasFavoritas}`)
}
trocandoComidas() 


// Nº3:

function exercicio3() {
    const listaDeTarefas = []

    let tarefa1 = prompt('Insira a sua primeira tarefa:')
    let tarefa2 = prompt('Insira a sua segunda tarefa:')
    let tarefa3 = prompt('Insira a sua terceira tarefa:')
    
    listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
    
    console.log(listaDeTarefas)
    //ou
    alert(listaDeTarefas)
    
    let indeceUser = prompt('Agora digite o índice da sua tarefa: 0, 1 ou 2')
    let remocaoUser = Number(indeceUser)
    
    listaDeTarefas.splice(remocaoUser, 1)
    
    console.log(listaDeTarefas)
    //ou
    alert(listaDeTarefas)
} 
exercicio3()



