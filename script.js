// Welcome message
console.log("Welcome to Urvi's Portfolio!");

// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  }
});
