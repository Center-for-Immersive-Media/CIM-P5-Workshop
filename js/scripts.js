import("../js/p5.min.js");

const preview = document.getElementById("preview");
const lessions = document.querySelectorAll(".lession");

lessions.forEach((lession) => {
  lession.addEventListener("mouseover", () => {
    preview.src = `./images/${lession.dataset.source}`;
  });
});
