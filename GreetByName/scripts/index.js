"use strict";
//loads index.js when the window is opened
window.onload = init;

//the init function
function init(){
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
}
function onGreetUserBtnClicked(){
    const nameField = document.getElementById("nameField");
    let name = nameField.value;
    let message = "Hello " + name;
    alert(message);
    
}

