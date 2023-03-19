window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("affix", window.scrollY > 0);
});

function response() {
  let showNavbar = document.querySelector(".coll-nav");
  // showNavbar.style.display="none"
  if (showNavbar.style.display === "block") {
    showNavbar.style.display = "none";
  } else {
    showNavbar.style.display = "block";
  }
  console.log(showNavbar.style.display);
  // showNavbar.style.display:block
}
