// solution 1
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) return true;
  
  return false;
}

console.log(isDivisible(3, 1, 3)); // true

// solution 2
function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0;
}

console.log(isDivisible(3, 1, 3)); // true

// solution 3
function isDivisible(n, x, y) {
  return !(n % x || n % y);
}

console.log(isDivisible(3, 1, 3)); // true

