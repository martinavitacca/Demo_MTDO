
// Funciones para el overlay
function openNav() {
  document.getElementById("menu").style.width = "100%"; 
  document.getElementById("openMenu").hidden = true;
  document.getElementById("closeMenu").style.visibility = "visible";

}
  
function closeNav() {
  document.getElementById("menu").style.width = "0%";
  document.getElementById("openMenu").hidden = false;
  document.getElementById("closeMenu").style.visibility = "hidden";
}


// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the overlay, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.getElementById("scrollUp").scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scrolls to the top of the overlay with smoothness
function topFunction() {
  document.getElementById("scrollUp").scrollTo({top: 0, behavior: 'smooth'});
}

mybutton.addEventListener("click",()=>{
    topFunction();
});
