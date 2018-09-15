// Hoisting
// hoisting can work only function decoration...
calculateAge(1998);
// function decoration
function calculateAge(year){
    console.log( 2018 - year);
}
//retirement(1998);   // it will be show error
// function expression
var retirement = function(year){
    console.log(60 - (2018 - year));
}


// hoisting in variable

console.log(age); // if there is no variable named "age" it will show error
var age = 23;

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);