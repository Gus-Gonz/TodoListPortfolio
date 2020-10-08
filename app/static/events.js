const taskInputButton = document.querySelector('#task-button-input') ; 
const ulListTask = document.querySelector('#list-task') ;
const buttonDisplayInfoCv = document.querySelector(".button-display-info-cv")
const buttonHideInfoCv = document.querySelector('.button-hide-info-cv')

let itIsDisplayed = false



window.addEventListener('load', getAllTaskDb);
window.addEventListener('load',modifyDisplayCv)
taskInputButton.addEventListener('click', taskSubmit);
buttonDisplayInfoCv.addEventListener('click',modifyDisplayCv)
buttonHideInfoCv.addEventListener('click',modifyDisplayCv)



