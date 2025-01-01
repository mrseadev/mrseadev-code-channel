document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".icon-open-search");
  const closeIcon = document.querySelector(".icon-close-empty");
  const searchBox = document.querySelector(".search");

  searchIcon.addEventListener("click", function () {
    if (!searchBox.classList.contains("active")) {
      searchBox.classList.add("active");
    }
  });

  closeIcon.addEventListener("click", function () {
    searchBox.classList.remove("active");
  });
});
