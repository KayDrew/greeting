var nameField= document.querySelector(".nameField");
var showCount= document.querySelector(".showCount");
var checkedRadio= document.querySelectorAll("input[name='language']");
var submit= document.querySelector(".submit");
var display=document.querySelector(".message");
var errorMessage= document.querySelector(".error");

let greetUser=greetName();


function showGreeting(){
var language="";
for(let radio of checkedRadio){

if(radio.checked){

language=radio.value;

}
}

greetUser.setName(nameField.value);

display.innerHTML=greetUser.getGreetings(language);
showCount.innerHTML =greetUser.getCounter();
errorMessage.innerHTML=greetUser.getCheckName();
display.style.color=greetUser.getMessageColor();


}

submit.addEventListener("click", showGreeting);