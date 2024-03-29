// solution 1
function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
}

console.log(paperwork(5, 5)); // 25
console.log(paperwork(-5, 5)); // 0
console.log(paperwork(5, -5)); // 0
console.log(paperwork(5, 0)); // 0
console.log(paperwork(0, 5)); // 0
console.log(paperwork(0, 0)); // 0

// solution 2
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

console.log(paperwork(5, 5)); // 25
console.log(paperwork(-5, 5)); // 0
console.log(paperwork(5, -5)); // 0
console.log(paperwork(5, 0)); // 0
console.log(paperwork(0, 5)); // 0
console.log(paperwork(0, 0)); // 0

