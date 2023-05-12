let names={};

function  greetName(){

var name="";
var displayMessage="";

var checkName="";

let usersGreeted = localStorage.getItem("greeted");


let greetings= [
{language:"Setswana",
greeting: "Dumela"},

{language: "Swahili",
greeting:"Habari"},

{language:"IsiNdebele",
greeting:"Akwande"}
];

let regex= /^([a-zA-Z]{3,})$/;

function setName(input){

if(input){
	
	
if(names.hasOwnProperty(input)){
	
	checkName="Please enter a new user name";
	
	}


else {

checkName="";

if(regex.test(input)){
name=input;
names[name]="greeted";


if(usersGreeted===null){

	usersGreeted=0;
}

else{
	usersGreeted++;
}

localStorage.setItem("greeted",usersGreeted);
	

}
else{
name="";
checkName="Please enter a valid name";
}


}


}



}



function getName(){
	
	return name;

}

function getGreetings(language){
	
	if(language && name && checkName!=="Please enter a new user name"){

for(let i=0; i<greetings.length;++i){
	
var lang=greetings[i];

if(language===lang.language){
	
	displayMessage= lang.greeting+" " +name;
	}
	
	}
	
}

else if(language && !name){
displayMessage= "No user was entered";
}

else if(language  && checkName==="Please enter a new user name") {
 displayMessage= "This user has been greeted before";
}

else{
displayMessage= "Please choose a  language from the options";
}

return displayMessage;
}


function getCheckName(){

return checkName;
}


function getCounter(){
	
return  usersGreeted;
}


function getMessageColor(){

if(displayMessage==="No user was entered" || displayMessage==="This user has been greeted before" || "Please choose a  language from the options"){
return "red";

}

return "black";

}


return {
setName,
getGreetings,
getCounter,
getCheckName,
getMessageColor

}

}


