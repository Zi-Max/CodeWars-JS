// solution 1
function century(year) {
  let result = year % 100 == 0 ? year / 100 : (year / 100 + 1) | 0;

  return result;
}

console.log(century(1900)); // 19
console.log(century(1801)); // 19
console.log(century(1522)); // 16

// solution 2

function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1900)); // 19
console.log(century(1801)); // 19
console.log(century(1522)); // 16
