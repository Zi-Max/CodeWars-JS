// solution 1
function bmi(weight, height) {
  result = weight / height ** 2;

  if (result <= 18.5) return "Underweight";
  else if (result <= 25.0) return "Normal";
  else if (result <= 30) return "Overweight";
  return "Obese";
}

console.log(bmi(80, 1.8)); // Normal

