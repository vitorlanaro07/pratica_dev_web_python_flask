var botao = document.querySelector("#btn");

botao.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Fui clicado");
})