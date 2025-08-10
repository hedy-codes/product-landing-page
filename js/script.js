const toggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
