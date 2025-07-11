const sticker = document.getElementById("sticker-footer");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    sticker.classList.add("show");
  } else {
    sticker.classList.remove("show");
  }
});