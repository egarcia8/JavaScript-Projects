document.write(typeof "Hello" + "<br>");//display the data type of variable

document.write("34" + 6 + "<br>");//combines a string and a number

function myFunction() { //determines if entry is NaN
    document.getElementById("test").innerHTML = 0/0;
}

function isNanfunction() { //determines if entry is NaN
    document.getElementById("test1").innerHTML = isNaN('This is a string');
}

document.getElementById("test2").innerHTML = 2E312;//determines infinity
document.getElementById("test3").innerHTML = -3E310;//determines negative infinity
document.write(545 > 672); //utilized > operator to compare and determine true or false
document.write("<br>");
document.write(745 > 652);//utilized > operator to compare and determine true or false

console.log(578 + 685);
console.log(74 < 52);

document.write("<br>");
document.write(16==16);//utilized == operator to determine if values are equal
document.write("<br>");
document.write((14+16)==25); //utilized == operator to determine if values are equal
document.write("<br>");

document.write("Using triple equals sign:")//utilized === to determine if two pieces of data have 
document.write("<br>");                     //equal data types and equal value types
var x = 45;
var y = 45;
document.write(x===y);

document.write("<br>");
var compare1 = 75;
var compare2 = "45";
document.write(compare1===compare2);

document.write("<br>");
var a = 45;
var b = "45";
document.write(a===b);

document.write("<br>");
var A = 89;
var B = 96;
document.write(A===B);
document.write("<br>");

document.write("Using operators:")
document.write("<br>");
document.write(25 < 28 && 96 > 65);//utilized && operator to compare and determine true or false
document.write("<br>");
document.write(45 < 25 && 75 > 45);
document.write("<br>");
document.write(78 < 96 || 85 > 102); //utilized || operator to compare and determine true or false
document.write("<br>");
document.write(78 > 96 || 85>102)
document.write("<br>");

function notFunction() {
    document.getElementById("Not").innerHTML = !(35 > 12);
}
