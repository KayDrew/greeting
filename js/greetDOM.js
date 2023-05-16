var nameField= document.querySelector(".nameField");
var showCount= document.querySelector(".showCount");
var checkedRadio= document.querySelectorAll("input[name='language']");
var submit= document.querySelector(".submit");
var reset= document.querySelector(".reset");
var display=document.querySelector(".message");
var errorMessage= document.querySelector(".error");
var from= document.querySelector(".form");
let greetUser=greetName();


function showGreeting(){
var language="";
for(let radio of checkedRadio){

if(radio.checked){

language=radio.value;

radio.checked=false;
}

}

greetUser.setName(nameField.value);

display.innerHTML=greetUser.getGreetings(language);
showCount.innerHTML =greetUser.getCounter();
errorMessage.innerHTML=greetUser.getCheckError();
nameField.value="";

errorMessage.style.visibility="visible";

setTimeout(function(){
  errorMessage.style.visibility="hidden";
},3000);

}

submit.addEventListener("click", showGreeting);


function resetAll(){
	
	greetUser.resetValues();
showCount.innerHTML =greetUser.getCounter();
errorMessage.innerHTML=greetUser.getCheckError();
display.innerHTML="";
}

reset.addEventListener("click", resetAll);