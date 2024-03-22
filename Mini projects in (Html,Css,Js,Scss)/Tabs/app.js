let allButtons = document.querySelectorAll("button");
let allBoxs = document.querySelectorAll(".box-info");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetButton = e.currentTarget;
    // Remove "active" class from all buttons
    allButtons.forEach((btn) => {
      if (btn !== targetButton) {
        btn.classList.remove("active");
      }
    });
    targetButton.classList.add("active");
    if (targetButton.classList.contains("active")) {
      allBoxs.forEach((box) => {
        if (box.getAttribute("data-name") == targetButton.textContent) {
          box.classList.add("active");
        } else {
          box.classList.remove("active");
        }
      });
    }
  });
});
