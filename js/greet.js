let names={};


function  greetName(){

var name="";
var checkError="";
var userExists=false;
var isInvalidName=false;


let greetings=[
{language:"Setswana",
greeting: "Dumela"},

{language: "Swahili",
greeting:"Habari"},

{language:"IsiNdebele",
greeting:"Akwande"}
];

let regex= /^([a-zA-Z]{3,})$/;

function setName(input){


if(input && regex.test(input.trim())){
	

var lowInput=input.toLowerCase();
	
if(names.hasOwnProperty(lowInput)){
	
	userExists=true;
	
	}
	
	else {
		
		userExists=false;
names[lowInput]="greeted";
}

checkError="";
name=input;



}
else if(!input){

name="";
checkError="Please enter a  name";
}

else if(input &&!regex.test(input.trim())  {

name="";
isInvalidName=true;
checkError="Please enter a valid name";
}

}




function getUserExists(){

return userExists;
}

function getName(){
	
	return name;

}

function getGreetings(language){
	
	if(language && name && !isInvalidName ){

for(let i=0; i<greetings.length;++i){
	
var lang=greetings[i];


if(language===lang.language){
	
	return lang.greeting+" " +name;
	}
	
	}
	
}

else if(name && !language){
	
checkError= "Please select a language";
}

else if(!name && !isInvalidName && !language){
checkError= "Please enter name and select a language";
}

return null;
}


function getCheckError(){

return checkError;
}



return {
setName,
getGreetings,
getCheckError,
getName,
getUserExists

}

}


