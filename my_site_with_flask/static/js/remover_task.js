
var task_list = document.querySelector(".tasks__apresentar");

task_list.addEventListener("dblclick", (event) => {
    var task = event.target;
    console.log(task);

    if(task.classList.contains("tasks__cards__iten")){
        task.parentNode.classList.add("tasks__cards--remove");
        setTimeout(function() {
            task.parentNode.remove()
        }, 500);
        // 
    }else{
        if(task.classList.contains("tasks__strong")){  
            task.parentNode.parentNode.classList.add("tasks__cards--remove");
            setTimeout(function() {
                task.parentNode.parentNode.remove();
            }, 500);

        }
        if (!task.classList.contains("tasks__apresentar")){
            task.classList.add("tasks__cards--remove");
            setTimeout(function() {
                task.remove();
            }, 500);
        }
        
    }

})