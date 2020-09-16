rain.js
console.log("Hrecin-part-two")

let rainfall = prompt("How many inches of rain fell?");
 
let bushels = 50;

let rainfallInches = "*";
    console.log("rain" + rainfallInches.repeat(rainfall));

let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "no") {
    if (rainfall > 20){
    bushels = bushels * .9;
    console.log("The crop yields " + (bushels * .9) + " bushels per year")
    }
    if (rainfall < 10){
    bushels = bushels * .8;
    console.log("The crop yields " + (bushels * .8) + " bushels per year")
    }
    if (rainfall == 11){
    bushels = bushels * 1;  
    console.log("The crop yields " + (bushels * 1) + " bushels per year")  
    }
}

if (fertilizer === "yes") {
let premium = prompt("Did you use premium or regular fertilizer?");
}