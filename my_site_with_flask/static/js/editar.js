

function editarTask(id) {
    var tarefa = document.querySelector(".input-edit");
    var desc = document.querySelector(".span-edit");
    var botao_salvar = document.querySelector(".botao-salvar button");

    tarefa.disabled = false;
    desc.disabled = false;
    botao_salvar.disabled = false;

    botao_salvar.addEventListener("click", function(event){
        var horaSalva = document.querySelector(".hora__salva");
        var dataSalva = document.querySelector(".dia__salvo");

        var newTarefa = tarefa.value;
        var newDescricao = desc.value;
        var hora = new Date().toLocaleTimeString();
        var data = getData()

        horaSalva.innerHTML = new Date().toLocaleTimeString();
        dataSalva.innerHTML = getData()

        tarefa.disabled = true;
        desc.disabled = true;
        botao_salvar.disabled = true;

        const formData = new FormData();
        
        formData.append("tarefa", newTarefa);
        formData.append("descricao", newDescricao);
        formData.append("dia", data);
        formData.append("hora", hora);
        var url = "/update/" + id;

        sendDatas(formData, url)
    })

}