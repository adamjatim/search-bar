const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const googleRadio = document.querySelector("#google-radio");
const ddgRadio = document.querySelector("#ddg-radio");

const googleUrl = "https://www.google.com/search?q=";
const ddgUrl = "https://duckduckgo.com/?q=";

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;

  if (searchTerm) {
    let searchUrl;

    if (googleRadio.checked) {
      searchUrl = googleUrl + searchTerm;
    } else if (ddgRadio.checked) {
      searchUrl = ddgUrl + searchTerm;
    }

    if (searchUrl) {
      window.location.href = searchUrl;
    }
  }
});
