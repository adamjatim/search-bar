const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const googleSearchBtn = document.querySelector("#google-search-btn");
const ddgSearchBtn = document.querySelector("#ddg-search-btn");

const googleUrl = "https://www.google.com/search?q=";
const ddgUrl = "https://duckduckgo.com/?q=";

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;

  if (searchTerm) {
    const googleSearch = googleUrl + searchTerm;
    const ddgSearch = ddgUrl + searchTerm;

    if (googleSearchBtn === event.submitter) {
      window.location.href = googleSearch;
    } else if (ddgSearchBtn === event.submitter) {
      window.location.href = ddgSearch;
    } else {
      window.location.href = googleSearch; // default to Google search if no button is clicked
    }
  }
});
