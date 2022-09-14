function My_First_Function() {  //This is a function that declares a variable and displays it when the button is clicked
    var str2 = "Have a great day!";
    document.write(str2) //This allows the to be displayed as a string not a button
    document.getElementById("Time_Button").innerHTML = str2;
}

function myFunction() {  //a function that concateates using the += operator
    var sent = "It is a beautiful morning";
    sent += " when the sun is shining.";
    document.getElementById("Concatenate").innerHTML = sent;
}