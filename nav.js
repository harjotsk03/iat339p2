const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const closeButton = document.getElementById("closeButton");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
