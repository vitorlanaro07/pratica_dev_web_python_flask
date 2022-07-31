var forms= document.querySelector(".tasks__forms");

function enviarDados(){
    const formData = new FormData(forms);
    formData.append("dia", getData());
    formData.append("hora", new Date().toLocaleTimeString());

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/adicionar"); 
    xhr.send(formData);     
}

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
    window.location.href = '/task/'+id;

});



