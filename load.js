// load variable
const loader = document.querySelector(".load");

// load functions
function load() {
  loader.classList.remove("loaded");
}

function loaded() {
  loader.classList.add("loaded");
}

// page load
window.addEventListener("DOMContentLoaded", () => {
  loaded();
});
