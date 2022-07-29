var forms= document.querySelector(".tasks__forms");

forms.addEventListener("submit", function (event) { 
    event.preventDefault();
    const formData = new FormData(forms);

    
    var hora = new Date().toLocaleTimeString();
    var data = getData()
    

    formData.append("dia", data);
    formData.append("hora", hora);

    console.log(formData.get)

    fetch('/task', {
        method: 'POST',
        body:formData
    }).then(function(response){
        console.log(response);
    });

    card = criarCard(forms, data, hora);
    console.log(card);
    // adicionarCard(card)
    document.querySelector('.tasks__apresentar').appendChild(card);

    forms.reset();

})


function getData() {
    var dia_ano = new Date().toLocaleDateString()
    dia = dia_ano.split("/")[1];
    mes = dia_ano.split("/")[0];
    ano = dia_ano.split("/")[2];
    if (dia.length == 1){
        dia = "0" + dia;
    }
    if (mes.length == 1){
        mes = "0" + mes;
    }
    return (dia + "/" + mes + "/" + ano);
}


function criarCard(forms, data, hora){
    var tarefa = forms.tarefa.value;
    var descricao = forms.descricao.value;

    var span_tarefa = document.createElement("span");
    var span_descricao = document.createElement("span");
    var span_dia = document.createElement("span");
    var span_hora = document.createElement("span");
    var div_card = document.createElement("div");


    span_tarefa.classList.add("tasks__cards__iten");
    span_tarefa.classList.add("tasks__cards__tarefa");

    span_descricao.classList.add("tasks__cards__iten");
    span_descricao.classList.add("tasks__cards__descricao");

    span_dia.classList.add("tasks__cards__iten");
    span_dia.classList.add("tasks__cards__dia");

    span_hora.classList.add("tasks__cards__iten");
    span_hora.classList.add("tasks__cards__hora");

    div_card.classList.add("tasks__cards");

    div_card.appendChild(span_tarefa);
    div_card.appendChild(span_descricao);
    div_card.appendChild(span_dia);
    div_card.appendChild(span_hora);


    div_card.querySelector(".tasks__cards__tarefa").textContent = "Tarefa:";
    div_card.querySelector(".tasks__cards__tarefa").innerHTML = "<strong>Tarefa:</strong> " + tarefa;

    div_card.querySelector(".tasks__cards__descricao").textContent= "Descrição:"; 
    div_card.querySelector(".tasks__cards__descricao").innerHTML= "<strong>Descrição:</strong> "+ descricao;

    div_card.querySelector(".tasks__cards__dia").textContent = "Dia:" 
    div_card.querySelector(".tasks__cards__dia").innerHTML = "<strong>Dia:</strong> " + data;


    div_card.querySelector(".tasks__cards__hora").textContent = "Hora: "
    div_card.querySelector(".tasks__cards__hora").innerHTML = "<strong>Hora:</strong> " + hora;


    return div_card
}