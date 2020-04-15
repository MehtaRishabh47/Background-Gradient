var h3 = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function gradient(){
    body.style.background = 
    "linear-gradient(to right,"
    + c1.value + "," 
    + c2.value + ")"; 

h3.textContent = body.style.background + ";";
}


c1.addEventListener("input",gradient);
c2.addEventListener("input",gradient);