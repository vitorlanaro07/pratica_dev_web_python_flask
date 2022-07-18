const botao = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botao.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral--ativo")
})