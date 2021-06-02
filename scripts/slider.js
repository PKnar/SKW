// Defining global variables
var slide_index = 1;  

// Next and previous slides mover
function nextSlide(n) {  
    openSlider(slide_index += n);  
}  
function currentSlide(n) {  
    openSlider(slide_index = n);  
}  

// Open slider
function openSlider(n) { 
    var i;  
    let imgList = document.querySelector("#add-after");
// -------------------------------
    // Inserts slider image paths from argument to HTML
    for(let argCounter = 1; argCounter < arguments.length; argCounter++)
    {
        imgList.insertAdjacentHTML("afterend", "<div class='showSlide fade'><img src=" + arguments[argCounter] + "></div>" );
    }

// -------------------------------
    // Open the actual slider
    var slides = document.getElementsByClassName("showSlide"); 
    var imgSlider = document.querySelector(".slideroverlay"); 
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
    imgSlider.style.display = "flex";
    setTimeout(function () {
        imgSlider.classList.remove("hide");
    }, 500);
    openSlider.called = true;
}

// Function to close image slider by chaning its display to none after animation is done
function closeSlider()
{
    var imgSlider = document.querySelector(".slideroverlay");
    // Closes image slider
    imgSlider.style.display = "none";
    document.querySelector(".imageslider").innerHTML="<p id='add-after'></p><!-- Navigation arrows --><a class='left' onclick='nextSlide(-1)'>❮</a><a class='right' onclick='nextSlide(1)'>❯</a>  ";
}

// Function that closes image slider when scrolled, can be closeSlider but it is little bit buggy and you cant open image for a while after you scroll (references.html, body, onscroll)
function closeSliderOnScroll()
{
    if(openSlider.called == true) 
    {
        closeSlider();
        openSlider.called = false;
    }
}