function  greetName(){
let count=0;
var name="";

let greetings=[
{language:"Setswana",
greeting: "Dumela"},

{language: "Swahili",
greeting:"Habari"},

{language:"IsiNdebele",
greeting:"Akwande"}
];

function setName(input){

if(input){
	
	
name=input;

}

}


function getName(){
	
	return name;

}

function getGreetings(language){
	

if(language && name){

for(let i=0; i<greetings.length;++i){
	
var lang=greetings[i];

if(language===lang.language){
	
	return lang.greeting+" " +name;
	}
	
	}
	
}
return "Enter valid name or language";
}


return {

setName,
getGreetings 
}

}


