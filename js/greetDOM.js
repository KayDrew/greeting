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

if(greetUser.getUserExists()===false && greetUser.getCheckError()!=="Please select a language"){
	

if (usersGreeted=== null) {
    usersGreeted = 1;
} else {
    usersGreeted++;
}

localStorage.setItem("greeted",usersGreeted);

}

}
showCount.innerHTML =usersGreeted;


errorMessage.style.visibility="visible";
errorMessage.style.color="red";

setTimeout(function(){
  errorMessage.style.visibility="hidden";
},3000);

}

submit.addEventListener("click", showGreeting);


function resetAll(){
	
	errorMessage.style.visibility="visible";
	errorMessage.innerHTML="Counter reseted";
	errorMessage.style.color="green";
	
	setTimeout(function(){
  errorMessage.style.visibility="hidden";
},3000);

localStorage.clear();
usersGreeted=0;
names={};

showCount.innerHTML =usersGreeted;
display.innerHTML="";
nameField.value="";

for(let radio of checkedRadio){

if(radio.checked){

language=radio.value;

radio.checked=false;
}

}


}

reset.addEventListener("click", resetAll);