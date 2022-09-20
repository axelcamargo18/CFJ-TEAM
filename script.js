/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleMobileMenu() {
  if (
    document.querySelector(".topnav").style.display === "" ||
    document.querySelector(".topnav").style.display === "none"
  ) {
    document.querySelector(".topnav").style.display = "flex";
  } else {
    document.querySelector(".topnav").style.display = "none";
  }
}
