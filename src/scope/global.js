// variables 

var a; // se declara la variable = a
var b = b; //decraracion y asignacion
b = 'bb'; //reacignacion
var a = 'aa'; //redeclaracion


//Global scope

var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    Country = 'Colombia'; //Declaracion global
    console.log(Country)
}

countries();
console.log(Country)

