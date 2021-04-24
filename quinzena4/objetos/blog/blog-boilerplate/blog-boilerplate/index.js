
function inputsUser() {
    let tituloUser = document.getElementById("titulo-post").value;
    document.getElementById("post1").innerHTML = 'este é o titulo: ' + tituloUser
    let autorUser = document.getElementById("autor-post").value;
    document.getElementById("post2").innerHTML = 'este é o autor: ' + autorUser
    let conteudoUser = document.getElementById("conteudo-post").value;
    document.getElementById("post3").innerHTML = 'este é o conteúdo: ' + conteudoUser


    let coletaDadosUser = {
        titulo: tituloUser,
        autor: autorUser,
        conteudo: conteudoUser
    }
    console.log(coletaDadosUser)

    //Tentei executar o trecho abaixo, mas não deu certo, ele apenas mostra OBJECT na tela. 
    //document.getElementById("post").innerHTML = coletaDadosUser.value


    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""

}

