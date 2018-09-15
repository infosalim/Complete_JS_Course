// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 60 - age;
//     if(retirement > 0){
//         return firstName+ " will retires in "+ retirement+" years";
//     }else{
//         return firstName+ " is already retired";
//     }
// }
// console.log(yearsUntilRetirement(1998, "Salim"));

// function declaration
// function person(name, age){}

// function expression

var whatDoYouDo = function(job, name){
    switch(job){
        case "teacher":
            return name+ " teaches how to code";
        case "developer":
            return name+ " develop websites and softwares";
        case "singer":
            return name+ " sing romantic song";
        default:
            return name+ " do something else";
    }
}
console.log(whatDoYouDo("developer", "Salim"));
console.log(whatDoYouDo("marketer", "Abir"));
console.log(whatDoYouDo("teacher", "Shuvro"));