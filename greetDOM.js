var nameField= document.querySelector(".nameField");
var showCount= document.querySelector(".showCount");
var checkedRadio= document.querySelectorAll("input[name='language']");
var submit= document.querySelector(".submit");
var display=document.querySelector(".message");

function showGreeting(){
var language="";

var greetUser=greetName();

for(let radio of checkedRadio){

if(radio.checked){

language=radio.value;

}
}

greetUser.setName(nameField.value);

display.innerHTML=greetUser.getGreetings(language);

}
submit.addEventListener("click", showGreeting);