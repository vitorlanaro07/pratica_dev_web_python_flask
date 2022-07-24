
const botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
    //retira os eventos padrões do envio de formularo
    event.preventDefault();

    //extrai informações que foram submetidas
    var form = document.querySelector("#form-adiciona");

    info = extraiInfos(form);

     //Cria um paciente
    var paciente = criaPaciente(info);


    //valida os dados do paciente e adiciona o imc
    adicionaPaciente(info.peso, info.altura, paciente);

    form.reset();
}); 

function adicionaPaciente(peso, altura, paciente) {
    var pacienteEhValido = validaPaciente(peso, altura, paciente);

    //seleciona a tabela e adiciona o paciente criado a ela como Filho
    if (pacienteEhValido){
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(paciente);
        var ul = document.querySelector("#mensagens-erro");
        ul.textContent = "";
    }else{
        apresentaErro(info);
        return;
    }
}

function apresentaErro(info){
    
    var ul = document.querySelector("#mensagens-erro");
    ul.textContent = "";
    var erros = []

    if (info.nome.length == 0){
        erros.push("*Campo nome vazio!");
    }

    if (info.gordura.length == 0){
        erros.push("*Campo gordura vazio!");
    }

    if (info.peso <= 0 || info.peso >= 1000){
        erros.push("*Peso invalido!");
    }

    if (info.altura <= 0 || info.altura >= 3){
        erros.push("*Altura invalida!");
    }

    erros.forEach(function(erro){
        console.log(erro);
        var li = document.createElement("li");
        li.textContent = erro;
        document.querySelector("#mensagens-erro").appendChild(li);
    })
}


function  extraiInfos(form){
    var info = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value
    }
    return info;
}

function criaPaciente(info) {
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTD = document.createElement("td");


    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTD.classList.add("info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTD);

    pacienteTr.classList.add("paciente");

    //adiciona informações aos pacientes
    pacienteTr.querySelector(".info-nome").textContent = info.nome;
    pacienteTr.querySelector(".info-peso").textContent = info.peso;
    pacienteTr.querySelector(".info-altura").textContent = info.altura; 
    pacienteTr.querySelector(".info-gordura").textContent = info.gordura;

    return pacienteTr;
}