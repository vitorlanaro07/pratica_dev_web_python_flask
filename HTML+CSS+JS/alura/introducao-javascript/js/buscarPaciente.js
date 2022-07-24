var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    var xml = new XMLHttpRequest();

    xml.open("GET", "pacientes.asp");

    xml.addEventListener("load", function(){
        var newPacientes = JSON.parse(xml.responseText);
        newPacientes.forEach(paciente => {
            info = {
                nome: paciente.nome,
                peso: paciente.peso,
                altura: paciente.altura,
                gordura: paciente.gordura
            }
            var paciente = criaPaciente(info);

            var tabela = document.querySelector("#tabela-pacientes");
            var pacientesExistentes = tabela.querySelectorAll(".paciente");
            var existe = false

            for (let index = 0; index < pacientesExistentes.length; index++) {

                if(info.nome == pacientesExistentes[index].querySelector(".info-nome").textContent){
                    existe = true;
                }
            }

            if (!existe){
                adicionaPaciente(info.peso, info.altura, paciente)
            }

        });
        console.log(xml.status);
    });

    

    xml.send()
})