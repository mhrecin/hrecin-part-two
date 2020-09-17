script.js
console.log("Hrecin-part-two");

let rainfall = prompt("How many inches of rain fell?");
 
let bushels = 50;

let rainfallInches = "*";
    console.log("rain " + rainfallInches.repeat(rainfall));

let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "no"){
    if (rainfall > 20){
    bushels = bushels * .9;
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");
    }
    if (rainfall < 10){
    bushels = bushels * .8;
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");
    }
    if (rainfall == 10){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 11){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 12){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 13){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 14){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 15){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 16){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 17){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 18){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
    if (rainfall == 19){
    bushels = bushels * 1;  
    console.log("The yield should be " + (bushels * 1) + " bushels per acre");  
    }
}

if (fertilizer === "yes") {
let premium = prompt("Did you use premium or regular fertilizer?");
if (premium === "premium") {
if (rainfall >= 20){
    bushels = bushels * .9;
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");
    }
    if (rainfall < 10){
    bushels = bushels * .8;
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");
    }
    if (rainfall == 10){
    bushels = bushels * 1; 
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 11){
    bushels = bushels * 1; 
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 12){
    bushels = bushels * 1; 
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 13){
    bushels = bushels * 1; 
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 14){
    bushels = bushels * 1;  
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 15){
    bushels = bushels * 1; 
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 16){
    bushels = bushels * 1;
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 17){
    bushels = bushels * 1;
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 18){
    bushels = bushels * 1; 
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
    if (rainfall == 19){
    bushels = bushels * 1;
    premium = premium * 1.5;
    console.log("The yield should be " + (bushels * 1.5) + " bushels per acre");  
    }
}
else if (premium === "regular") {
 if (rainfall >= 20){
    bushels = bushels * .9;
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");
    }
    if (rainfall < 10){
    bushels = bushels * .8;
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");
    }
    if (rainfall == 10){
    bushels = bushels * 1; 
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 11){
    bushels = bushels * 1; 
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 12){
    bushels = bushels * 1; 
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 13){
    bushels = bushels * 1; 
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 14){
    bushels = bushels * 1;  
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 15){
    bushels = bushels * 1; 
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 16){
    bushels = bushels * 1;
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 17){
    bushels = bushels * 1;
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 18){
    bushels = bushels * 1; 
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
    if (rainfall == 19){
    bushels = bushels * 1;
    regular = regular * 1.1;
    console.log("The yield should be " + (bushels * 1.1) + " bushels per acre");  
    }
}
else {
    console.log("Something else happened");
}
}

</script>
</body>
</html>