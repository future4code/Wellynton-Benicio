```
function calculaPrecoTotal(quantidadeMacas) {
  //const quantidadeMacas = Number(prompt('Insira a quantidade de maçãs:')) --> poderia ter definido um prompt para o usuário. 
  const calculo1 = quantidadeMacas * 1
  const calculo1e30 = quantidadeMacas * 1.30
  
  if (quantidadeMacas >= 12){
    console.log(`O valor total é de ${calculo1}`)    
  } else if  (quantidadeMacas <= 12) {
    console.log(`O valor total é de ${calculo1e30}`)    
  }
  
}

calculaPrecoTotal (15)

```