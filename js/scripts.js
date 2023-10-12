const preview = document.getElementById("preview");
const Lessons = document.querySelectorAll(".lesson");
const dialog = document.querySelector("#workshop-description");
const showButton = document.querySelector(".tooltip > p > button");
const closeButton = document.querySelector(
  "#workshop-description > div >button"
);

Lessons.forEach((Lesson) => {
  Lesson.addEventListener("mouseover", () => {
    preview.src = `./images/${Lesson.dataset.source}`;
  });
});

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
