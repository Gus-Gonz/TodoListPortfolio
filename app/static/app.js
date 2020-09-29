const taskInputButton = document.querySelector('#task-button-input') ; 
const ulListTask = document.querySelector('#list-task') ;


function createTask (taskInputValue){
    $.ajax({
        url: '/task',
        type: 'POST',
        dataType  : 'json',
        data      : {"task" : taskInputValue},
        success: function(answer) {
            console.log(answer)

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
        showTaskList(taskInputValue);
        createTask(taskInputValue);
    }
}


function getAllTask (){
    $.ajax({
        url: '/task',
        type: 'GET',
        dataType  : 'json',
        success: function(answer) {
            console.log(answer);
            for (task of answer){
                showTaskList(task.task);
            }
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
}

function showTaskList(taskInputValue){
    ulListTask.appendChild(document.createElement("li"));
    const newLi =ulListTask.lastElementChild;
    newLi.textContent = taskInputValue;

}



window.addEventListener('load',getAllTask)
taskInputButton.addEventListener('click', taskSubmit);