var salim = {
    fullName: "Salim Hossain",
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalVaules = [];
        for(var i=0; i<this.bills.length; i++){
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill > 50){
                percentage = .2;
            }else if( bill >= 50 && bill < 200){
                percentage = .15;
            }else{
                percentage = .1;
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalVaules[i] = bill + this.tips[i];
        }
    }
};


var sajib = {
    fullName: "Mehedi Hasan",
    bills: [77, 47, 10, 45],
    calcTips: function(){
        this.tips = [];
        this.finalVaules = [];
        for(var i=0; i<this.bills.length; i++){
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 100){
                percentage = .2;
            }else if( bill >= 100 && bill < 300){
                percentage = .1;
            }else{
                percentage = .25;
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalVaules[i] = bill + this.tips[i];
        }
    }
};

function calcAverage(tips){
    var sum = 0;
    for(var i =0; i< tips.length; i++){
        sum += tips[i];
    }
    return sum / tips.length;
}



salim.calcTips();
sajib.calcTips();

salim.average  = calcAverage(salim.tips);
sajib.average  = calcAverage(sajib.tips);
console.log(salim,sajib);
console.log("\n");

if(salim.average > sajib.average){
    console.log(salim.fullName + '\'s family pays higher tips, with an average of $'+ salim.average);
}else if(sajib.average > salim.average){
    console.log(sajib.fullName + '\'s family pays higher tips, with an average of $'+ sajib.average);
}else{
    console.log(salim.fullName+" and "+sajib.fullName+" pays equal tips.");
}

