var X = 25; // global variable assigned to use in functions
function Addition() { // addition function utilizes global and local variable
    var Y = 20 // local variable assigned to us within function
    document.write(X + 15 + Y);
} 
function Addition2() { // second addition function created
    console.log(X + 30 + Y); // error found "y is not defined" because it is a local 
}                           //variable in Addition() function not accessible to Addition2() function
Addition();
Addition2();

function my_Date() { //function example provided using if statement
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "Good evening!"
    }
}

function today() { // if statement used in function using date method
    if (new Date().getMonth() == 8) {
        document.getElementById("Month").innerHTML = "Happy September!"
    }
}

function my_Number() { // function using if and else statments
    Number = document.getElementById("Number").value;
    var your_Number;
    if (Number > 25) {
        your_Number = "Your number is more than my number.";
    }
    else {
        your_Number = "Your number is less than my number."
    }
    document.getElementById("Guess").innerHTML = your_Number;

}

function Time_function() { //Time_function() provided using if, else if, and else statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}