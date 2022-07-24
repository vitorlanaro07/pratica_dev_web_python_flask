
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    validaPaciente(peso, altura, paciente);
}


function validaPaciente(peso, altura, paciente){
    var alturaEhValida = validaAltura(altura, paciente);
    var pesoEhValido = validaPeso(peso, paciente);

    if (pesoEhValido && alturaEhValida){
        var imc  = calculaIMC(peso, altura)
        paciente.querySelector(".info-imc").textContent = imc;
        return true;
    }else{
        var pacienteInvalido = paciente;
        pacienteInvalido.classList.add("valor-invalido");
        return false;
    }
}



function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    
    return imc.toFixed(2);    
}



function validaPeso(peso,paciente){
    if (peso <= 0 || peso >=1000){
        paciente.querySelector(".info-imc").textContent = "Peso Invalido";
        return false;
    }else{
        return true;
    }
}



function validaAltura(altura, paciente){
    if(altura <=0 || altura >= 3){
        paciente.querySelector(".info-imc").textContent = "Altura Invalida";
        return false;
    }else{
        return true;
    }
}