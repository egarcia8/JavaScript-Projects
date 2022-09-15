function my_Dictionary() { //dictionary with a function that outputs a key-value pair into an HTML element
    var familyMember = {
        Name: "Dennis",
        Member: "Dad",
        Birthday: "September",
        Age: 37
    };
    document.getElementById("Dictionary").innerHTML = familyMember.Name;
}

function Dictionary1() {//dictionary added 
    var Animal = {
        Name: "Dog",
        Color: "White",
        Sound: "Bark",
        Color: "Black"
    };
    delete Animal.Color; //delete statement that removes the key before the value is displayed
    document.getElementById("test").innerHTML = Animal.Color;
}