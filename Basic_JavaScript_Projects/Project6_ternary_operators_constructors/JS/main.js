function Ride_Function() { //Example provided that utilizes a ternary operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { // function that utilizes a ternary operation using input from the broswer
    var Age, Can_vote; //Age variable provided by input from browser
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"Congratulations! You can vote!"; // using ternary operator to set conditionand determine value
    document.getElementById("Vote").innerHTML = Can_vote; // results of function displayed within HTML element
}

function Vehicle(Make, Model, Year, Color) { //Example provided of constructor function that uses 'new' and 'this' keywords
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erick.Vehicle_Color + "-colored " 
    + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year + ".";
}

function Book(Title, Author, Date, Genre) { //Constructor function that uses 'new' and 'this' keywords
    this.Book_Title = Title; // using 'this' keyword to create a placeholder for undetermined values
    this.Book_Author = Author;
    this.Book_Date = Date;
    this.Book_Genre = Genre;
}
var Book1 = new Book("Happiness", "Sunny Davis", 1995, "Nonfiction"); //using 'new' keyword to create objects of the Book function
function myBook() { //function to display the results of the constructor function within an HTML element
    document.getElementById("New_and_This").innerHTML = Book1.Book_Title + " is a " + Book1.Book_Genre + " book written by " 
    + Book1.Book_Author + " in " + Book1.Book_Date;
}

function Countdown() { //created a nested function that counts down
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 20;
        function Minus_one() {Starting_point -= 1;}
        Minus_one();
        return Starting_point;
    }
}