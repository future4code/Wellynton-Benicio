``` 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 const salario = 2000
 const comicao5PorCento = valorTotalVendas * 5/100
 const comicaoCarroVendido = qtdeCarrosVendidos * 100
 const comicaoVendedor = comicao5PorCento + comicaoCarroVendido
 const salarioTotal = salario + comicaoVendedor

 
 console.log(salarioTotal)
}

calculaSalario(3, 130000)
```