var nameField= document.querySelector(".nameField");
var showCount= document.querySelector(".showCount");
var checkedRadio= document.querySelectorAll("input[name='language']");
var submit= document.querySelector(".submit");
var reset= document.querySelector(".reset");
var display=document.querySelector(".message");
var errorMessage= document.querySelector(".error");
var from= document.querySelector(".form");
let greetUser=greetName();
let usersGreeted=localStorage.getItem("greeted");

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

errorMessage.innerHTML=greetUser.getCheckError();
nameField.value="";

if(greetUser.getName()){

if(greetUser.getUserExists()===false){
	

if (usersGreeted=== null) {
    usersGreeted = 1;
} else {
    usersGreeted++;
}

localStorage.setItem("greeted",usersGreeted);

}

}
showCount.innerHTML =greetUser.getCounter();


errorMessage.style.visibility="visible";

setTimeout(function(){
  errorMessage.style.visibility="hidden";
},3000);

}

submit.addEventListener("click", showGreeting);


function resetAll(){
	
	
	if(reset){
  
  alert("Counter reseted");
  
localStorage.clear();
usersGreeted=0;
names={};

showCount.innerHTML =greetUser.getCounter();
errorMessage.innerHTML=greetUser.getCheckError();
display.innerHTML="";

}
}

reset.addEventListener("click", resetAll);