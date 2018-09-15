// var a = "Hello";
// first();
// function first(){
//     var b = 'Hi!';
//     second();
    
//     function second(){
//         var c = 'Hey';
//         third();
//     }
// }

// function third(){
//     var d = 'Salim';
//     // console.log(c);
//     console.log(a + " " + d);
// }

//
//
//

// This keyword

// console.log(this);

var salim = {
    name: "Salim",
    yearOfBirth: 1998,
    calculateAge: function(){
        console.log(this);
        console.log(this.name);
    }
}
salim.calculateAge();

var abir = {
    name: "Abir",
    yearOfBirth: 1992
};

// method borrowing
abir.calculateAge = salim.calculateAge;
console.log(abir.calculateAge());