let allBoxs = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("button");

////When click
/*
---sure that all boxes that isn't target has no class "showAnswer"
---in target button you click add class show answer
---if target button you click is has already the class remove it
*/

//this solution by get all buttons in doucment first then the boxs => (Q&A)
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const qeustion = e.currentTarget.parentElement.parentElement;
    allBoxs.forEach((box) => {
      if (box !== qeustion) {
        box.classList.remove("showAnswer");
      }
    });
    qeustion.classList.toggle("showAnswer");
  });
});

//this solution by get all boxs => (Q&A) in doucment first then the buttons
/*allBoxs.forEach((box) => {
  targetButton = box.querySelector("button");
  targetButton.addEventListener("click", () => {
    allBoxs.forEach((b) => {
      if (b !== box) {
        b.classList.remove("showAnswer");
      }
    });
    box.classList.toggle("showAnswer");
  });
});*/
