let names={};
let usersGreeted=localStorage.getItem("greeted");

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

if(input){
	
	if(regex.test(input)){
		
var lowInput=input.toLowerCase();
	
if(names.hasOwnProperty(lowInput)){
	
	userExists=true;
	
	}
	
	else {
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

else{
	
name="";

checkError="Please enter a valid name";

}





}



function getName(){
	
	return name;

}

function getGreetings(language){
	
	if(language && name ){

for(let i=0; i<greetings.length;++i){
	
var lang=greetings[i];


if(language===lang.language){
	
	if(userExists===false){
	

if (usersGreeted=== null) {
    usersGreeted = 0;
} else {
    usersGreeted++;
}

localStorage.setItem("greeted",usersGreeted);

}
	return lang.greeting+" " +name;
	}
	
	}
	
}

else if(name && !language){
checkError= "Please enter a valid language";
}
return null;
}


function getCheckError(){

return checkError;
}


function getCounter(){
	
return  usersGreeted;
}

function resetValues(){

localStorage.removeItem("greeted");
usersGreeted=0;
names={};
}


return {
setName,
getGreetings,
getCounter,
getCheckError,
resetValues

}

}


