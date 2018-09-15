var salim = {
    firstName: "Salim",
    lastName: "Hossain",
    birthYear: 1998,
    family: ["dulal","samsunnahar","sagor","dola","salim"],
    jon: "developer",
    isMarried: false,
    calcAge: function(){
        this.age =  2018 - this.birthYear;
        return this.age;
    }
};

console.log(salim.firstName, salim.lastName + " is now "+salim.calcAge()+" years old.");
console.log(salim.age);