var now=new Date();
var data ={};
var pagamento;
var total;
var nome;
var telefone;
var email;
var endereço;
var produtos=[];

var produto1 = {};
var produto2 = {};
var produto3 = {};

function enviar() {
   nome=document.getElementById("nome").value;
   telefone=document.getElementById("phone").value;
   email=document.getElementById("mail").value;
   endereço=document.getElementById("address").value;

   console.log(nome, telefone, email, endereço);

   produto1.nome=document.getElementById("product1").textContent;
   produto1.valor=Number(document.getElementById("value1").textContent);
   produto1.quantidade=Number(document.getElementById("quantidade1").value);

   produtos.push(produto1);

   produto2.nome=document.getElementById("product2").textContent;
   produto2.valor=Number(document.getElementById("value2").textContent);
   produto2.quantidade=Number(document.getElementById("quantidade2").value);

   produtos.push(produto2);

   produto3.nome=document.getElementById("product3").textContent;
   produto3.valor=Number(document.getElementById("value3").textContent);
   produto3.quantidade=Number(document.getElementById("quantidade3").value);

   produtos.push(produto3);

   pagamento=document.getElementById("pagamento").value;

   total=(produtos[0].quantidade * produtos[0].valor)+(produtos[1].quantidade * produtos[1].valor)+(produtos[2].quantidade * produtos[2].valor);
   
  

   data.hora=novaHora();
   data.day=now.getDay();
   data.month=now.getMonth();
   data.year=now.getFullYear();
   
   console.log(data, total);

   window.alert("Compra realizada em ", data.day, "/",data.mounth, "/", data.year", "  O total da compra foi: ", total);
   
}

function novaHora() {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }
    var date = new Date();
    return [date.getHours(), date.getMinutes()].map(pad).join(':');
}












// OBJETO É UM GRUPO DE INFORMAÇÕES DIFERENTES DENTRO DE UMA ÚNICA VARIÁVEL. 

// Array É UM GRUPO DE INFORMAÇÕES IGUAIS EM UMA ÚNICA VARIÁVEL, POR EXEMPLO: ARRAY DE NOMES.