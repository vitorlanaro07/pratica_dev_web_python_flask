var menu = document.querySelector(".menu-dropdown");
var botao_menu = document.querySelector(".btn-dropdown");

botao_menu.addEventListener("click", function(){
    console.log("CLik");
    menu.classList.toggle("menu-dropdown--ativo");
})