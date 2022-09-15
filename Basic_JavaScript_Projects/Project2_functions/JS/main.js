function My_First_Function() {  //This is a function that declares a variable and displays it when the button is clicked
    var str2 = "Have a great day!";
    document.getElementById("Time_Button").innerHTML = str2;
}

function myFunction() {  //a function that concateates using the += operator
    var sent = "It is a beautiful morning";
    sent += " when the sun is shining.";
    document.getElementById("Concatenate").innerHTML = sent;
}

function addClasses(a, b) {
    return a + b;    
}
document.getElementById("test").innerHTML = addClasses(23, 27);   