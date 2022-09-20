function countdown() { // function created to pull seconds value from HTML input
    var seconds = document.getElementById("seconds").value;

    function tick() { // function to countdown beginning from value obtained from input
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //the program is pausing for 1,000 milliseconds(1 second)
        if (seconds == -1) { // conditional statement to  create alert at end of timer
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1; // global variable to use for all fucntions
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function that controls movement of slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}