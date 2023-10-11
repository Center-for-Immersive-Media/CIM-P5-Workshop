import("../js/p5.min.js");

const preview = document.getElementById("preview");
const Lessons = document.querySelectorAll(".lesson");

Lessons.forEach((Lesson) => {
  Lesson.addEventListener("mouseover", () => {
    preview.src = `./images/${Lesson.dataset.source}`;
  });
});
