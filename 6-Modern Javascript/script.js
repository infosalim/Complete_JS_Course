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

/*
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

*/


/*
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');


// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5
/*
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        // continue;
        break;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/
/*
// ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }

    cur.textContent = 'I changed it to Blue!';
}

// ES5
var ages = [12,42,14,15,32,22];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/*
// Lecture: Spread Operator

function addFourAges(a,b,c,d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller,'Salim', 'Sagor'];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

// Lecture: Rest Perameters
/*
// ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur){
        console.log((2018 - cur) >= 18);
    });
}

//isFullAge5(1998, 1999,2006,1994, 2001);

// ES6
function isFullAge6(...years){
    //console.log(years);
    years.forEach(cur => console.log((2018 - cur) >= 18));
}
isFullAge6(1998, 1999,2006,1994, 2001);
*/
/*
// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);
    argsArr.forEach(function (cur) {
        console.log((2018 - cur) >= limit);
    });
}

//isFullAge5(21,1998, 1999,2006,1994, 2001);

// ES6
function isFullAge6(limit, ...years) {
    //console.log(years);
    years.forEach(cur => console.log((2018 - cur) >= limit));
}
isFullAge6(16,1998, 1999, 2006, 1994, 2001);
*/

// Lecture: Default Parameters
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
*/

// ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality= 'American'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1993);
*/

/*
// Lecture: Maps
const question = new Map();

question.set('question', 'What is the official name of the latest major Javascript version');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)){
   // question.delete(4);
}
// question.clear();

// question.forEach((value, key) => {
//     console.log(`This is ${key}, and it's set to ${value}`);
// });

for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer.'));

console.log(question.get(ans === question.get('correct')));
*/
/*
// Lecture: Classes

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
    }

    static greeting(){
        console.log('Hello');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting(); 
*/

/*
// Lecture: Classes and Subclasses

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5  = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6
class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/

/* 
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there area only 3 parks and 4 streets. All parks and streets have a name and build year.

At an end-of-year meeting, your boss wants a final report with the following:

1. Tree density of each park in the town 
   (formula: numeber of trees/pars area)
2. Average age of each town's park
   (formula: sum of all ages/nu,ber of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets.
5. Size classification of all streets:
   tiny/small/normal/big/huge. If the size is unknown, the default is normal.

   All the report data should be printed to the console.

   HINT: use some of the ES6 features: classes, subclasses, temple strings,default parameters, maps, arrow functios, destructuring etc.
*/

class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area;  // square km
        this.numTrees = numTrees;
    }

    treeDensity(){
         const density = this.numTrees / this.area;
         console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element{
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1897, 2.8, 2342),
    new Park('Oak Park', 1963, 0.4,  298)
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.5, 0.8),
    new Street('Sunset Boulevard', 1982, 2.4, 5)
];

function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum/arr.length];
}

function reportParks(p){

    console.log('-------PARK REPORT--------');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s){

    console.log('-------STREET REPORT--------');

    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} kn, with an average of ${avgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());


}

reportParks(allParks);
reportStreets(allStreets);


















