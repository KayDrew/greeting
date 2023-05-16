let names={};
let usersGreeted=0;

function  greetName(){

var name="";
var count=0;
var checkError=""


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
	
var lowInput=input.toLowerCase();
	
if(names.hasOwnProperty(lowInput)){
	
	name="";
	
	}


else {

checkError="";

if(regex.test(input)){
name=input;
names[lowInput]="greeted";
}

else{
name="";

}


}


}


else{
name="";
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
	
	count++;

localStorage.setItem("greeted",count);
	
	usersGreeted = localStorage.getItem("greeted");

	return lang.greeting+" " +name;
	}
	
	}
	
}

checkError= "Please enter a valid name and  language";

return null;
}


function getCheckError(){

return checkError;
}


function getCounter(){
	
return  usersGreeted;
}

function resetValues(){


count=0;
usersGreeted =0;

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


