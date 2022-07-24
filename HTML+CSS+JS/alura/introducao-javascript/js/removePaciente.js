var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentElement.classList.add("escurecerParaApagar");
    setTimeout(function(){
        var remove = event.target.parentElement.remove(); 
    }, 500);

    //    
})
