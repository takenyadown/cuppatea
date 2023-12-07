function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
 }
 document.getElementById(tabName).style.display = "block";  
}

//slideshow
let slideIndex = [1,1];
let slideId = ["mySlides", "mySlides-mobile"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}



// mobile device detection

// The viewport is less than 768 pixels wide
if (window.matchMedia("(max-width: 767px)").matches)
{
  // true for desktop device
document.querySelector('.desktop-only').style.display = 'none';
}else{
    // false for mobile device
  document.querySelector('.mobile-only').style.display = 'none';
}