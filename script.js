const themeToggle = document.getElementById("themeToggle");

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
    themeToggle.setAttribute("aria-pressed", "true");
}

themeToggle.addEventListener("click", function () {

    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {

        themeToggle.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

        themeToggle.setAttribute("aria-pressed", "true");

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

        themeToggle.setAttribute("aria-pressed", "false");
    }

});
