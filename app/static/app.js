    // GET ALL TASK IN DB
function getAllTaskDb(){
    $.ajax({
        url: '/task',
        type: 'GET',
        dataType  : 'json',
        success: function(answer) {
            console.log(answer);
            for (task of answer){
                showTaskList(task.task,task.id);
            }
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
}


function showTaskList(taskValue,taskId){
    ulListTask.appendChild(document.createElement("li"));
    const newLi =ulListTask.lastElementChild;
    newLi.appendChild(document.createElement("div"));
    newLi.setAttribute('class','task');

    const newDiv = newLi.lastElementChild;
    newDiv.innerHTML = taskValue;
    newDiv.setAttribute('id',taskId);
    newDiv.setAttribute('class','task-info');

    newLi.appendChild(document.createElement("span"));
    const newSpan = newLi.lastElementChild;
    newSpan.setAttribute('class',"button-wrapers");

    newSpan.appendChild(document.createElement("button"));  //create the button EDIT
    const newButtomEdit = newSpan.lastElementChild;
    newButtomEdit.setAttribute('class','edit-button');
    newButtomEdit.addEventListener('click',editTask);
    
    newButtomEdit.appendChild(document.createElement("i"));  //create the <i></i> for the icon 
    const newIEdit = newButtomEdit.lastElementChild;
    newIEdit.setAttribute('class',"far fa-edit");

    newSpan.appendChild(document.createElement("button"));  //create the button DELETE
    const newButtomDelete = newSpan.lastElementChild;
    newButtomDelete.setAttribute('class','delete-button');
    newButtomDelete.addEventListener('click', deleteTask);

    newButtomDelete.appendChild(document.createElement("i"));  //create the <i></i> for the icon 
    const newIDelete = newButtomDelete.lastElementChild;
    newIDelete.setAttribute('class',"far fa-trash-alt");

}
    // NEW TASK

function taskSubmit(){
    let taskInputValue = document.getElementById('task-input').value;
    console.log(taskInputValue);
    if (taskInputValue) {
        createTaskDb(taskInputValue);
        
    }
        
};

function createTaskDb (taskInputValue){
    $.ajax({
        url: '/task',
        type: 'POST',
        dataType  : 'json',
        data      : {"task" : taskInputValue},
        success: function(answer) {
            console.log(answer);
            showTaskList(taskInputValue,answer.id)
        },
        error: function() {
            console.error("No es posible completar la operación");
        }
    });
    
}


    // EDIT TASK

function editTask(){
    let li = this.parentNode.parentNode;
    let div  = li.querySelector('div');
    li.insertAdjacentHTML('afterbegin',`<input placeholder="${div.innerHTML}">`);

    li.appendChild(document.createElement('span'));
    let newSpan = li.lastElementChild;
    newSpan.setAttribute('class','button-wrapers');
    newSpan.insertAdjacentHTML('beforeend',`<button class='edit-submit'><i class="far fa-check-square"></i>`); // create the sumit button
    newSpan.insertAdjacentHTML('beforeend',`<button class='edit-cancel'><i class="far fa-window-close"></i>`); // create the cancel button

    //lets hide the old task (<div>)and the old button 
    div.style.display = 'none';
    let oldButton = li.querySelector('.button-wrapers');
    oldButton.style.display = 'none'; 

    //if we click submit
    let buttonSubmit = li.querySelector ('.edit-submit');
    buttonSubmit.addEventListener('click',clickEditSubmit);
    

    
    //if we click cancel 
    let buttonCancel = li.querySelector ('.edit-cancel');
    buttonCancel.addEventListener('click',clickEditCancel);

}
    //if we click submit
function clickEditSubmit(){
    let parent = this.parentNode.parentNode;
    let input = parent.querySelector('input').value;
    let taskPosition = parent.querySelector('div');
    let oldButton = parent.querySelector('.button-wrapers');
    
    parent.lastElementChild.remove();
    parent.firstElementChild.remove();

    if (input !== ''){
        $.ajax({
            url: '/task',
            type: 'PUT',
            dataType  : 'json',
            data      : {"task" : input,"id" : taskPosition.id},
            success: function(answer) {
                console.log(answer)
                taskPosition.innerHTML=`${input}`;
                taskPosition.style.display = '';
                oldButton.style.display = '';
            },
            error: function() {
                alert("No es posible completar la operación");
            }  
        });
    }else {taskPosition.style.display = '';
        oldButton.style.display = '';
        alert('No puedes dejar en blanco la nueva tarea');
            
}
}

    //if we click cancel 
function clickEditCancel (){  
    let parent = this.parentNode.parentNode;
    parent.lastElementChild.remove();
    parent.firstElementChild.remove();
    parent.querySelector('.task-info').style.display = '';
    parent.querySelector('.button-wrapers').style.display = '';
}

     // DELETE TASK

function deleteTaskHandler (){
    const actionsConfirmSection = document.getElementsByClassName('actions-confirm');

    actionsConfirmSection.appendChild(document.createElement('span'));
    let newSpan = li.lastElementChild;
    newSpan.setAttribute('class','button-wrapers');
    newSpan.insertAdjacentHTML('beforeend',`<button class='edit-submit'><i class="far fa-check-square"></i>`); // create the sumit button
    newSpan.insertAdjacentHTML('beforeend',`<button class='edit-cancel'><i class="far fa-window-close"></i>`); // create the cancel button
}

function deleteTask (){
    parent = this.parentNode.parentNode ;
    let taskPosition = parent.querySelector('div');

    $.ajax({
        url: '/task',
        type: 'DELETE',
        dataType  : 'json',
        data      : {"id" : taskPosition.id},
        success: function(answer) {
            console.log(answer)
            parent.remove()
            //window.location.reload(false)
        },
        error: function() {
            alert("No es posible completar la operación");
        }   
    });
}
    // DISPLAY FOOTER CV 
function modifyDisplayCv (){

    if (itIsDisplayed) {
        console.log(itIsDisplayed);
        buttonDisplayInfoCv.style.display ='none' ;
        buttonHideInfoCv.style.display ='';
        changeCssDisplayCv(itIsDisplayed);
        itIsDisplayed = false;

    }else{
        console.log(itIsDisplayed);
        buttonDisplayInfoCv.style.display ='';
        buttonHideInfoCv.style.display ='none';
        changeCssDisplayCv(itIsDisplayed);
        itIsDisplayed = true;

    }
}

function changeCssDisplayCv (itIsDisplayed){
    let footer = document.querySelector('footer');

    if (itIsDisplayed){
        footer.animate([
            {//from
            height : '30px' 

        },  {//to
            height : '130px'
        }],500);
        footer.style.height = '130px';
        footer.lastElementChild.style.display = '';

    }else{
        footer.animate([
            {//from
            height : '130px' 

        },  {//to
            height : '30px'
        }],500);
        footer.style.height = '30px';
        footer.lastElementChild.style.display = 'none';
    }

}