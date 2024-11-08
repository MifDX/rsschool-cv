const btn = document.querySelector(".theme-button");
const style = document.querySelector("#theme-style");
btn.addEventListener("click", function() {
    if (style.getAttribute("href") == "style.css") {
    style.href = "dark-style.css";
  } else {
    style.href = "style.css";
  }
});