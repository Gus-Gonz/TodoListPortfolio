const taskInputButton = document.querySelector('#task-button-input') ; 
const ulListTask = document.querySelector('#list-task') ;




window.addEventListener('load', getAllTaskDb);
taskInputButton.addEventListener('click', taskSubmit);

const editButton = document.querySelectorAll ('i');

editButton.forEach(btn => {
    btn.addEventListener('click',editTask);
} );

