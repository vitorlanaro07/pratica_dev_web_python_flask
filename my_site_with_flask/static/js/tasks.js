var forms= document.querySelector(".tasks__forms");

forms.addEventListener("submit", function (event) { 
    const formData = new FormData(forms);
    
    var hora = new Date().toLocaleTimeString();
    var data = getData()

    formData.append("dia", data);
    formData.append("hora", hora);

    fetch('/task', {
        method: 'POST',
        body:formData
    }).then(function(response){
        console.log(response);
    });


})

var task_list = document.querySelector(".tasks__apresentar");

task_list.addEventListener("dblclick", (event) => {
    var task = event.target;
    var alvo;
    var id;

    if (!task.classList.contains("tasks__apresentar")){
        if(task.classList.contains("tasks__strong")){
            alvo = task.parentNode.parentNode.querySelector("#id_task");
            id = alvo.textContent;
        }else{
            if(task.classList.contains("tasks__cards__iten")){
                alvo = task.parentNode.querySelector("#id_task");
                id = alvo.textContent;
            }else{
                alvo = task.querySelector("#id_task");
                id = alvo.textContent;
            }
        }  
    }

    window.location.href = '/task/id/'+id;

});

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