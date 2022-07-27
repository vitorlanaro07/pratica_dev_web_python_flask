var menu = document.querySelector(".menu-dropdown");
var botao = document.querySelector(".btn-dropdown");

botao.addEventListener("click", function(){
    console.log("CLik");
    menu.classList.toggle("menu-dropdown--ativo");
})