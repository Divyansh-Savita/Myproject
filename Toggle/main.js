const body = document.getElementById("body");
const toggleBtn = document.getElementById("toggleBtn");

// Default mode
body.classList.add("light");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  toggleBtn.textContent =
    body.classList.contains("dark") ? "Switch to Light Mode" : "Switch to Dark Mode";
});