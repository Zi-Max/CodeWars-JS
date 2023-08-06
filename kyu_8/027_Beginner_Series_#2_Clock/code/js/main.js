// solution 1
function past(h, m, s) {
  return ((h * 3600) + (60 * m) + s) * 1000;
}

console.log(past(1, 0, 1)); // 3601000
