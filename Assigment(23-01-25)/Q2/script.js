let colorArray = [];

const colorInput = document.getElementById("colorInput");
const storeColorButton = document.getElementById("storeColorButton");
const listColorsButton = document.getElementById("listColorsButton");
const colorButtonsContainer = document.getElementById("colorButtonsContainer");

colorInput.addEventListener("input", () => {
  document.body.style.backgroundColor = colorInput.value;
});

storeColorButton.addEventListener("click", () => {
  const colorValue = colorInput.value;

  if (colorValue) {
    colorArray.push(colorValue);
  }
});

listColorsButton.addEventListener("click", () => {
  colorButtonsContainer.innerHTML = "";

  colorArray.forEach((colorValue) => {
    const newColorButton = document.createElement("button");
    newColorButton.textContent = colorValue;
    newColorButton.style.backgroundColor = colorValue;
    newColorButton.style.margin = "5px";

    newColorButton.addEventListener("click", () => {
      newColorButton.remove(); 
    });

    colorButtonsContainer.appendChild(newColorButton);
  });
});
