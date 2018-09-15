var john = {
    fullName: "John Smith",
    mass: 100,
    height: 1.90,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
var mark = {
    fullName: "Mark Wood",
    mass: 74,
    height: 1.82,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
john.bmi = john.calcBmi();
mark.bmi = mark.calcBmi();

if(john.bmi > mark.bmi){
    console.log(john.fullName+" BMI "+ john.bmi +" is highest.");
}else if(mark.bmi > john.bmi){
    console.log(mark.fullName+" BMI "+ mark.bmi+" is highest."); 
}else{
    console.log("Their bmi is same");
}
