// solution 1
function simpleMultiplication(number) {
  if (number % 2 === 0) return number * 8;
  return number * 9;
}

console.log(simpleMultiplication(10)); // 80
console.log(simpleMultiplication(3)); // 27

// solution 2
function simpleMultiplication(number) {
  return number * (number % 2 ? 9 : 8);
}

console.log(simpleMultiplication(10)); // 80
console.log(simpleMultiplication(3)); // 27

// solution 3
function simpleMultiplication(number) {
  return (8 + (number % 2)) * number;
}

console.log(simpleMultiplication(10)); // 80
console.log(simpleMultiplication(3)); // 27

