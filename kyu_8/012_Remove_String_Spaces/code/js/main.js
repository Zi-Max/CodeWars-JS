// solution 1
function noSpace(x) {
  let result = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] != " ") result += x[i];
  }

  return result;
}

console.log(noSpace("  a c e 3  ")); // ace3

// solution 2

function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace(" 1 2 3 ")); // 123
