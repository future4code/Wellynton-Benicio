// Exercícios de interpretação de código ///

// Nº1
/*
console.log(filme.elenco[0]) - "Matheus Nachtergaele"

console.log(filme.elenco[filme.elenco.length - 1]) - "Virginia Cavendish"

console.log(filme.transmissoesHoje[2]) - {canal: "Globo", horario: "14h"}
*/

// Nº2
//a) O primeiro objeto conforme foi declarado. O segundo console irá exibir a mesma estrutrura declarada, porém com o nome JUBA ao invés de JUCA. Já o terceiro console log irá imprimir a estrutura já modificada (segundo console log), substituindo todas as vogais A pela vogal O, especificamente no nome. Ao invés de ser exibido JUBa, será exibido JUBO. Si

//b) Realiza a cópia do objeto. 

// Nº3
//a) Undefined nos dois console log. 

//b) A propriedade definida não existe dentro do objeto. 



// Exercícios de escrita de código // 

// Nº1
//a) 
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

 function chamaApelidoUser(objeto) {
	console.log(`Eu sou Amanda, mas pode me chamar de: ${pessoa.apelidos}`)
}

chamaApelidoUser(pessoa) 

//b)
const pessoa2 = {...pessoa, apelidos: ["Zézinha", "Josefa", "Marfina"]}

function chamaApelidoUser(objeto) {
	console.log(`Eu sou Amanda, mas pode me chamar de: ${pessoa2.apelidos}`)
}

chamaApelidoUser(pessoa2)

// Nº2
//a) 

const objeto1 = {
    nome: 'Wellynton',
    idade: 25, 
    profissao: 'Account Executive'
}

const objeto2 = {
    nome: 'Joãozinho',
    idade: 55, 
    profissao: 'Empresário'
}

//b)
function retornaArray (objeto1, objeto2) {
    let array = [
        objeto1.nome, 
        objeto2.nome, 
        objeto1.nome.length, 
        objeto2.nome.length,
        objeto1.idade, 
        objeto2.idade,
        objeto1.profissao,
        objeto2.profissao,
        objeto1.profissao.length,
        objeto2.profissao.length 
    ] 

    console.log(array)
}

retornaArray (objeto1, objeto2)

// Nº3
//a) 

let carrinho = []

//b) 

const frutas = [
    {
    nome: 'Maçã',
    disponibilidade: true
},{
    nome: 'Banan',
    disponibilidade: false
},{
    nome: 'Melancia',
    disponibilidade: true
}]

//c)

function inserirNoCarrinho(frutas, carrinho) {
    carrinho.push(frutas[0], frutas[1], frutas[2])
    console.log(carrinho)
}

//d)

inserirNoCarrinho(frutas, carrinho)
