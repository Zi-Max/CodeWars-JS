// solution 1
function numberToString(num) {
  return num.toString();
}

console.log(typeof numberToString(123)); // string
console.log(numberToString(123)); // "123"

// solution 2
function numberToString(num) {
  return String(num);
}

console.log(typeof numberToString(123)); // string
console.log(numberToString(123)); // "123"

// solution 3
function numberToString(num) {
  return `${num}`;
}

console.log(typeof numberToString(123)); // string
console.log(numberToString(123)); // "123"

