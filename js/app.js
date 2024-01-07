// RESONSIVE NAVBAR | CODE REFERENCED FROM WEB DEV SIMPLIFIED
//Getting hamburger menu and list element by class name
// const nav_toggle = document.querySelector('nav_toggle');
// const nav_list = document.querySelector('nav_list');

// //Toggle function to show nav_list
// nav_toggle.addEventListener('click', () => {
//   nav_toggle.classList.toggle("active");
//   nav_list.classList.toggle("active");
// })

const navigation = document.querySelector(".navigation");
const navToggle = document.querySelector(".nav_toggle");

navToggle.addEventListener("click", () => {
  const visibilty = navigation.getAttribute("data-visible");
  if (visibilty === "false") {
    navToggle.classList.toggle("active");
    navigation.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true)
  } else if (visibilty === "true") {
    navToggle.classList.toggle("active");
    navigation.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false)
  }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}