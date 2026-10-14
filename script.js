
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Interactive dashboard tasks
document.querySelectorAll(".task-row input").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const taskText = checkbox
      .closest(".task-row")
      .querySelector(".task-text");

    taskText.classList.toggle("done", checkbox.checked);
  });
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Highlight the current navigation section
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(
  '.nav-links a[href^="#"]'
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navigationLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", isActive);
          });
        }
      });
    },
    { rootMargin: "-25% 0px -60% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}
