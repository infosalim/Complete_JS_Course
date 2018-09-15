// Function Constructor
/*
var salim = {
    name: 'Salim',
    yearOfBirth: 1998,
    job: 'teacher'
}

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
}
Person.prototype.lastName = 'Hossain';
var rasel = new Person('Rasel', 1993, 'bekar');
console.log(rasel);
var sanjay = new Person('SK', 1994, 'Motion Graphic Designer');
var rubel = new Person('Mokhles Khan', 1987, 'Engineer');
rasel.calculateAge();
rubel.calculateAge();
sanjay.calculateAge();
console.log(rasel.lastName);
console.log(rubel.lastName);
console.log(sanjay.lastName);

*/

// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1998;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: { value: 1995},
    job: {value: 'designer'}
})
*/


/*
// Primitives vs Objects

// Primitives
var a = 34;
var b = a;
a = 97;

console.log(a);
console.log(b);

// Objects
var obj1  = {
    name: 'Salim',
    age: 20
};

var obj2 = obj1;
obj1.age = 21;

console.log(obj1);
console.log(obj2);

// Function
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Libson'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);

*/

/*
// Passing Function as an arguments

var years = [1998, 1994, 1995, 1989, 1988];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}
function isFullAges(el){
    return el >= 18;
}
function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAges);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

/*

// Functions returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, '+ name+ '?');
        }
    }else{
        return function(name){
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}
var designerQuestion = interviewQuestion('designer');
designerQuestion('Mehdi');

interviewQuestion('developer')('Salim');

*/


/*
// IIFE (Immediately Invoked Function Expression)

// normal function
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IIFE
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >=5 - goodLuck);
})(5);

*/

/*
// Closures

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementBan = retirement(60);
var retirementUS = retirement(66);
var retirementGermany = retirement(65);

retirementBan(1998);
retirementUS(1998);
retirementGermany(1998);


function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }else if(job === 'teacher'){
            console.log('What subject do you teach, '+ name+ '?');
        }else{
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}
interviewQuestion('designer')('Mehdi');

*/

/*
// Bind, Call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good '+ timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? ' + ' I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.'+ ' Have a nice '+ timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age:  20,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly'); // bind can preset some arguments

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');
emilyFormal('night');



var years = [1998, 1994, 1995, 1989, 1988,2002];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}
function isFullAges(limit, el){
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAges.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


// CODING CHALLENGE

/* --- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) The answer from which the player can choose the correct one(choose an adequate data structure here, array, object etc.)
    c) Correct answer ( I would use a number for this

2. Create a couple of questions using the constructor

3. Store them all inside array.

4. Select one random question and log it on the console, together which the possible answer (each question should have a number) (Hint: Write a method for the question object for this task).

5. Use the 'promp' function to ask the user for the correct answer. The user should input the number pf the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmer to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: We learned a special technic to do exactly that).
*/

/*
// Solution
(function () {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }
    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong aswer. Try again :)');
        }
    }

    var q1 = new Question(
        'Is Javascript the coolest programming language in the world?',
        ['Yes', 'No'],
        0
    );
    var q2 = new Question(
        'What is the name of this course\'s teacher?',
        [
            'John',
            'Micheal',
            'Jonas'
        ],
        0
    );
    var q3 = new Question(
        'What does best describing coding?',
        [
            'Boring',
            'Hard',
            'Fun',
            'Tediuos'
        ],
        2
    );

    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();

*/

/*
--- Expert level --

8. After you display the result, display the next random question, so that the game never end (Hint: write a function for this ad call it right after displaying the result).

9. Be careful: after task 8, the game literaly never ends. So include the option to quite the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with this tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// Solution
(function () {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong aswer. Try again :)');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('-------------------------------------------------');
    }

    var q1 = new Question(
        'Is Javascript the coolest programming language in the world?',
        ['Yes', 'No'],
        0
    );
    var q2 = new Question(
        'What is the name of this course\'s teacher?',
        [
            'John',
            'Micheal',
            'Jonas'
        ],
        0
    );
    var q3 = new Question(
        'What does best describing coding?',
        [
            'Boring',
            'Hard',
            'Fun',
            'Tediuos'
        ],
        2
    );
    var questions = [q1, q2, q3];

    function score(){
        var sc = 1;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion(){
        
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
    
        var answer = prompt('Please select the correct answer.');
        
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
        
    }
    nextQuestion();
})();

