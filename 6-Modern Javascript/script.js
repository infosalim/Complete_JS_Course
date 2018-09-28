// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6  = 'Jane Miller'; // It will show error, we can't change const
console.log(name6);
*/

/*
// ES5
function driverLicence5(passedTest){
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990; 
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driverLicence5(true);

// ES6
function driverLicence6(passedTest){
    const yearOfBirth = 1990;
    let firstName
    if(passedTest){
        firstName = 'John';
        
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driverLicence6(true);


let i = 23;
for(i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);

var i = 23;
for( i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);
*/

/*
//////////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6 
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a + b);
console.log(c);

(function(){
    var c = 3;
})();
// console.log(c);
*/

/*
////////////////////////////////////////////////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2018 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// This is called Template Literal
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('S'));
console.log(n.endsWith('h'));
console.log(n.includes('k'));
console.log(firstName.repeat(3));
console.log(`${firstName} `.repeat(5));

*/

/*
// Lecture: Arrow Fucntions

const years = [1990, 1992, 1995];


// ES5
var ages5 = years.map(function(el){
    return 2018 - el;
});
console.log('ES5 output: ' + ages5);

// ES6
const ages6 = years.map(el => 2016 - el);
console.log(`ES6 output is: ${ages6}`);

let anotherAges6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(anotherAges6);

anotherAges6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index + 1}: ${age}.`;
});
console.log(anotherAges6);
*/

// Arrow function 2

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         var self = this;
//         document.querySelector('.green').addEventListener('click',
//             function () {
//                 var str = 'This is box number ' + self.position + ' and it is ' + self.color; 
//                 alert(str);
//             });
//     }
// };
// box5.clickMe();

/*
// ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click',
            () => {
                var str = 'This is box number ' + this.position + ' and it is ' + this.color; 
                alert(str);
            });
    }
};
box6.clickMe();
*/
/*
var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click',
            () => {
                var str = 'This is box number ' + this.position + ' and it is ' + this.color; 
                alert(str);
            });
    }
};
box66.clickMe();
*/
/*
function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myfriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob','Jane','Mark'];

new Person('John').myfriends5(friends);

// ES6
Person.prototype.myfriends6 = function(friends){
    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Mike').myfriends6(friends);
*/

// Lecture: Destructuring

// ES5
var john = ['John', 23];
// var name = john[0];
// var age = john[1];


// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 60 - age];
}

const [age2, retirement] = calcAgeRetirement(1996);
console.log(age2);
console.log(retirement);



























































