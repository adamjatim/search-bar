const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const searchEngineSelect = document.querySelector("#search-engine-select");

const googleUrl = "https://www.google.com/search?q=";
const ddgUrl = "https://duckduckgo.com/?q=";

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;

  if (searchTerm) {
    let searchUrl;

    if (searchEngineSelect.value === "google") {
      searchUrl = googleUrl + searchTerm;
    } else if (searchEngineSelect.value === "ddg") {
      searchUrl = ddgUrl + searchTerm;
    }

    if (searchUrl) {
      window.location.href = searchUrl;
    }
  }
});
