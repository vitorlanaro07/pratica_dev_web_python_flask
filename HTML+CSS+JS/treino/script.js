const corpo = document.querySelector(".corpo");
const botao = document.querySelector(".botao");
const texto = document.querySelector(".texto");
y = 55 * 9

botao.addEventListener("click", () => {
    
    if (document.querySelector(".texto")){
        alert("Texto visivel")   
    }
        alert("Texto invisivel")

    texto.classList.toggle("texto--desativado");
})

var hello = document.querySelector(".ola");