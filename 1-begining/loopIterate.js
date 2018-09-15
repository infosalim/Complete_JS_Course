var salim = ["fun","chill", 2018, "programming"];
for(var i = 0; i < salim.length; i++){
    if(typeof salim[i] !== "string") continue;
    console.log(salim[i]);
}
console.log("\n");
for(var i = 0; i < salim.length; i++){
    if(typeof salim[i] !== "string") break;
    console.log(salim[i]);
}
console.log("\n");
for(var i = salim.length -1; i >= 0 ; i--){
    console.log(salim[i]);
}