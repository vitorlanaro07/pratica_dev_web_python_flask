var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.getElementsByClassName("paciente");

// console.log(pacientes);

for (let index = 0; index < pacientes.length; index++) {
    var pesoEhValido = true;
    var alturaEhValida = true;
    var nome = pacientes[index].querySelector(".info-nome").textContent;
    var peso = pacientes[index].querySelector(".info-peso").textContent;
    var gordura = pacientes[index].querySelector(".info-gordura").textContent;
    var altura = pacientes[index].querySelector(".info-altura").textContent;

    if (peso <= 0 || peso >=1000){
        pacientes[index].querySelector(".info-imc").textContent = "Peso Invalido";
        pesoEhValido = false;
    }

    if(altura <=0 || altura >= 3){
        pacientes[index].querySelector(".info-imc").textContent = "Altura Invalida";
        alturaEhValida = false;
    }

    if (pesoEhValido && alturaEhValida){
        var calculo = (peso / (altura * altura));
        pacientes[index].querySelector(".info-imc").textContent = calculo.toFixed(1);
    }else{
        var pacienteInvalido = pacientes[index];
        pacienteInvalido.classList.add("valor-invalido");
    }
}


var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", adiciona_chama)

function adiciona_chama(){
    console.log("ola");
    var campos = document.querySelectorAll("input");
    var nome = campos[0].value;
    var peso = campos[1].value;
    var altura = campos[2].value;
    var gordura = campos[3].value;
    var paciente = document.querySelector(".paciente");
    
}