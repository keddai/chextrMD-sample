// RESONSIVE NAVBAR | CODE REFERENCED FROM WEB DEV SIMPLIFIED
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
