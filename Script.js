function getPlusDiv(galleryElement) {

  var slideIndex = 1;
  showDivs(slideIndex);
   
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) 
  {
    // Här har jag ändrat så att vi söker bara i en specifik bildvisning
    var x = document.getElementById(galleryElement).getElementsByClassName("images");
    if (n > x.length)
        slideIndex = 1;  
      
    if (n < 1) 
        slideIndex = x.length;
      
    for (var i = 0; i < x.length; i++) 
       x[i].style.display = "none";  
      
    x[slideIndex - 1].style.display = "block";
  }

  return plusDivs;
}

/*
* Jag minns inte vad du hade för klassnamn på dina bildvisningar, 
* alltså elementet som innehöll bilderna. Du får rätta till det.
*/
var gallery_class1 = "ImageSlideshow"; // Ändra till ditt klassnamn
var gallery_class2 = "ImageSlideshow2";

var plusDivs1 = getPlusDiv(gallery_class1);
var plusDivs2 = getPlusDiv(gallery_class2);

/*
* Nu har du två olika funktioner som du kan använda. Använd plusDivs1 i
* onclick i den första bildvisningen och plusDivs2 i den andra.
* Dvs där det nu står onclick="plusDivs(1)" ska det stå 
* onclick="plusDivs1(1)" eller onclick="plusDivs2(1)" (olika för
* olika bildvisningar.)
*/