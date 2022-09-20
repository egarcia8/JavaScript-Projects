// function with a loop that continues while the condition is met
function Call_Loop() {
    var number = "";
    var A = 10;
    while (A > 0) {
        number += "<br>The number is: " + A;
        A--;
    }
    document.getElementById("Loop").innerHTML = number;
}

// function with a for loop that continues for the set number of iterations
var Instruments = ["Piano", "Violin", "Viola", "Bass", "Cello", "Harp", "Bells"]; // array of instruments contains 7 elements
var Items = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) {
        Items += "I love the " + Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Items;
}

// function with an array
function array_Function() {
    var genre = [];
    genre[0] = "Historical fiction";
    genre[1] = "Mystery";
    genre[2] = "Biography";
    genre[3] = "Nonfiction";
    document.getElementById("Array").innerHTML = genre[1] + " is my favorite genre of books.";
}
// function utilizing a constant
function constant_function() {
    const family = {name:"Dennis", member:"Dad", color:"blue"};
    document.getElementById("Constant").innerHTML = family.name + " is my " + family.member;
    family.color = "red";
    family.age = 37;
    document.getElementById("Constant").innerHTML = family.name + " is " + family.age +
    " years old. His favorite color is " + family.color;
}
// utilizing 'let' keyword and showing examples of scope
var animal = "cat";
document.write(animal + "<br>");
{
    let animal = "dog";
    document.write(animal + "<br>");
}
document.write(animal);
// creating an object using the 'let' keyword
let class_period = {
    subject: "Math",
    period: "2nd",
    teacher: "Mrs.Jones",
    grade: "8th",
    description: function() {
        return "During " + this.period + " period " + this.teacher + " teaches " +
        this.grade + " grade " + this.subject + ".";
    }
};
document.getElementById("school").innerHTML = class_period.description();    
    

