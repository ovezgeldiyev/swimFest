// scroll start
let header = document.getElementById("header");
let scrollText = document.getElementById("scrollText");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
    scrollText.classList.add("active");
  } else {
    header.classList.remove("sticky");
    scrollText.classList.remove("active");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end