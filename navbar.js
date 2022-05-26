const navToggle = document.querySelector(".navToggle");
const navbar = document.querySelector(".navbar");


navToggle.addEventListener("click", ()=>{
  navbar.classList.toggle("navbar_visible");
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBarId").style.top = "0";
    document.getElementById("navBarId").style.backgroundColor = "#0A1931";
  } else {
    document.getElementById("navBarId").style.top = "-100px";
    document.getElementById("navBarId").style.transition = "0.3s";
    document.getElementById("navBarId").style.backgroundColor = "transparent";
  }
  prevScrollpos = currentScrollPos;
} 