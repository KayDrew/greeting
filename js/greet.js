let names={};


function  greetName(){

var name="";
var checkError="";
var userExists=false;


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

else{

name="";

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
	
	if(language && name ){

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
return null;
}


function getCheckError(){

return checkError;
}


function getCounter(){
	
return  usersGreeted;
}



return {
setName,
getGreetings,
getCounter,
getCheckError,
getName,
getUserExists

}

}


