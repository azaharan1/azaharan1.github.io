// For toggling light and dark themes

const button = document.querySelector(".button-toggle");

// listens for click on toggle button
button.addEventListener("click", function() {
    // toggles on/off dark-theme
    document.body.classList.toggle("dark-theme");
    document.querySelectorAll(".card").classList.toggle("dark-theme");
});