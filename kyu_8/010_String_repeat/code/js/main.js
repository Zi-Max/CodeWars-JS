// solution 1
function repeatStr(n, s) {
  let result = "";

  for (let i = 1; i <= n; i++) result += s;

  return result;
}

console.log(repeatStr(5, "a")); // aaaaa (5 times)

// solution 2
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(5, "a")); // aaaaa (5 times)

