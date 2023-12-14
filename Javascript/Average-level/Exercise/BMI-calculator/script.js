let $ = document;

const weightInput = $.querySelector("#weight");
const heightInput = $.querySelector("#height");
const weightValue = $.querySelector("#weight-val");
const heightValue = $.querySelector("#height-val");
const resultBMI = $.querySelector("#result");
const category = $.querySelector("#category");

function bmiCalculator() {
  weightValue.innerHTML = weightInput.value;
  let weightResult = weightValue.innerHTML;

  heightValue.innerHTML = heightInput.value;
  let heightResult = heightValue.innerHTML;

  let bmiResult = (weightResult / Math.pow(heightResult / 100, 2)).toFixed(1);

  if (bmiResult < 18.5) {
    resultBMI.style.color = "#FFA726";
    resultBMI.innerHTML = bmiResult;
    category.innerHTML = "Underweight";
  } else if (bmiResult > 18.5 && bmiResult < 24.9) {
    resultBMI.style.color = "#0be881";
    resultBMI.innerHTML = bmiResult;
    category.innerHTML = "Normal weight";
  } else if (bmiResult > 25 && bmiResult < 29.9) {
    resultBMI.style.color = "#FF7043";
    resultBMI.innerHTML = bmiResult;
    category.innerHTML = "Over weight";
  } else {
    resultBMI.style.color = "#EF5350";
    resultBMI.innerHTML = bmiResult;
    category.innerHTML = "Obese";
  }
}

weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);
