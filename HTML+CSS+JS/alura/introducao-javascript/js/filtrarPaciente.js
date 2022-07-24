var busca = document.querySelector("#pesquisa-paciente");
var tabela = document.querySelector("#tabela-pacientes");

busca.addEventListener("input", function(){
    console.clear();
    var nome_busca = this.value;
    var pacientes = tabela.children;

    for (let index = 0; index < pacientes.length; index++) {
        var paciente = pacientes[index];
        var nome = paciente.querySelector(".info-nome").textContent.toUpperCase();
        var new_nome = nome.match(nome_busca.toUpperCase());
        try {
            console.log(new_nome.input);
            paciente.classList.remove("escurecerParaApagar");
            paciente.hidden = false;
            
        } catch (error) {
            paciente.classList.add("escurecerParaApagar");
            paciente.hidden = true;
        }
    }
});