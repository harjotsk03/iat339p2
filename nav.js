document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const dropdown = document.querySelector(".dropdown > a");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Hamburger menu functionality
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // Keyboard navigation for dropdown
  dropdown.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";

      // If opening the dropdown, focus the first item
      if (dropdownContent.style.display === "block") {
        const firstDropdownItem = dropdownContent.querySelector("a");
        if (firstDropdownItem) {
          firstDropdownItem.focus();
        }
      }
    }
  });

  // Handle keyboard navigation within dropdown
  dropdownContent.addEventListener("keydown", function (e) {
    const items = dropdownContent.querySelectorAll("a");
    const currentIndex = Array.from(items).indexOf(document.activeElement);

    switch (e.key) {
      case "Escape":
        dropdownContent.style.display = "none";
        dropdown.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        if (currentIndex > 0) {
          items[currentIndex - 1].focus();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (currentIndex < items.length - 1) {
          items[currentIndex + 1].focus();
        }
        break;
    }
  });

  // Close dropdown when focus leaves
  document.addEventListener("focusin", function (e) {
    if (!dropdown.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.style.display = "none";
    }
  });
});
