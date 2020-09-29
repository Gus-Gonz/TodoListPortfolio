const taskInputButton = document.querySelector('#task-button-input') ; 
const ulListTask = document.querySelector('#list-task') ;

function createTask (taskInputValue){
    $.ajax({
        url: '/task',
        type: 'POST',
        dataType  : 'json',
        data      : {"task" : taskInputValue},
        success: function(respuesta) {
            console.log(respuesta)
            console.log(respuesta.name);
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });

}



function taskSubmit(){
    let taskInputValue = document.getElementById('task-input').value;
    console.log(taskInputValue);
    if (taskInputValue) {
        ulListTask.appendChild(document.createElement("li"));
        const newLi =ulListTask.lastElementChild;
        newLi.textContent = taskInputValue;
        createTask(taskInputValue)
        
    }
}


taskInputButton.addEventListener('click', taskSubmit);