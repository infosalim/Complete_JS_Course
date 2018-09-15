var name = "Salim";

function first(){
    var a = "Hello";
    second();
    var x = a + name;
}
function second(){
    var b = "Hi";
    third();
    var z = b + name;
}
function third(){
    var c = "Hei";
    var z = c + name;
}
console.log(first());
console.log(name);
