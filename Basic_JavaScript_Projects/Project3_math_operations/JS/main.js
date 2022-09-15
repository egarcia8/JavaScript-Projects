function addNumbers() { //function used to add two integers
    var addition = 5 + 6;
    document.getElementById("Math").innerHTML = "5 + 6 = " + addition;
}

function subtractNumbers() { //function used to subtract two integers
    var subtraction = 25 - 17;
    document.getElementById("Math2").innerHTML = "25 - 17 = " + subtraction;
}

function multiplyNumbers() { //function used to multiply two integers
    var multiplication = 47 * 85;
    document.getElementById("Math3").innerHTML = "47 * 85 = " + multiplication;
}

function divideNumbers() { //function used to divide two integers
    var division = 85 / 5;
    document.getElementById("Math4").innerHTML = "85 / 5 = " + division;
}

function simpleMath() { //function used to show multiple operator on one line using order of operations
    var orderOfoperations = (4 + 9) * 8 / 3 -2;
    document.getElementById("Math5").innerHTML = "(4 + 9) * 8 / 3 - 2 = " + orderOfoperations;
}

function modulusOperator() { //function using the modulus operator which tells the remainder of a division expression
    var remainder = 65 % 7;
    document.getElementById("Math6").innerHTML = "When you divide 65 by 7 you have a remainder of: " + remainder;
}

function negationOperator() { //function used to return the opposite of an integer
    var x = 56;
    document.getElementById("Math7").innerHTML = -x;
}

function increment() { //function used to increase an integer by 1
    var integer = 8
    integer++
    document.getElementById("Math8").innerHTML = integer;
}

function decrement() {//function used to decrease an integer by 1
    var integer2 = 19.65
    integer2--
    document.getElementById("Math9").innerHTML = integer2;
}

function getRndInteger() { //function used to generate a random number less than 100
    return Math.random() * 100;
}


document.write("5.78 rounded to the nearest integer is: " + Math.round(5.78));