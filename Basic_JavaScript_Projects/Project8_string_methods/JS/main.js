function my_Sentence() {//function that utilizes concat() method to concatenate strings
    var part_1 = "My name ";
    var part_2 = " is Evelina ";
    var part_3 = " Garcia.";
    var full_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = full_sentence;
}

function sentence_Section() { //function that utilizes slice() method to slice out and display a section of the sentence
    var sentence = "Humpty Dumpty sat on a wall.";
    var section = sentence.slice(7, 13);
    document.getElementById("Slice").innerHTML = section;
}

function example_String() { //function that utilizes toUpperCase() method to display string in upper case
    var firstSentence = document.getElementById("Upper").innerHTML;
    var secondSentence = firstSentence.toUpperCase();
    document.getElementById("Upper").innerHTML = secondSentence;
}
var text = "Today is Monday the 19th." // utilize search() method to search for a value in a string and return its position
var position = text.search("Monday");
document.getElementById("test").innerHTML = position;

function stringMethod() { //function that utilizes toString() to convert number to string
    var X =98;
    document.getElementById("strings").innerHTML = X.toString();
}

function precisionMethod() { // function that utilizes toPrecision() method to limit number to specified length
    var A = 125865.23658974
    document.getElementById("precise").innerHTML = A.toPrecision(7);
}