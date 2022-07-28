var forms= document.querySelector(".tasks__forms");

forms.addEventListener("submit", function (event) { 
    event.preventDefault();
    const formData = new FormData(forms);

    var dia = new Date().toLocaleDateString()
    var hora = new Date().toLocaleTimeString();

    formData.append("dia", dia);
    formData.append("hora", hora);

    console.log(formData.get)

    fetch('/task', {
        method: 'POST',
        body:formData
    }).then(function(response){
        console.log(response);
    });

    card = criarCard(forms);
    // adicionarCard(card)
    document.querySelector('.tasks__apresentar').appendChild(card);

    forms.reset();

})
// function adicionarCard(card) {
//     document.querySelector('.tasks__apresentar').appendChild(card);

// }
    // var taskHora = document.querySelector(".tasks__cards__tarefa");
    // taskHora.innerHTML += forms.tarefa.value;

function criarCard(forms){
    var span_tarefa = document.createElement("span");
    var span_descricao = document.createElement("span");
    var span_dia = document.createElement("span");
    var span_hora = document.createElement("span");
    var div_card = document.createElement("div");

    span_tarefa.textContent = forms.tarefa.value;
    span_descricao.textContent = forms.descricao.value;
    span_dia.textContent = forms.dia.value;
    span_hora.textContent = forms.hora.value;

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

    return div_card
}