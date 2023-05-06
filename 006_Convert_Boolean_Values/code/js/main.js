// solution 1
function boolToWord(bool) {
  if (bool) return "Yes";
  else return "No";
}

console.log(boolToWord(true));

// solution 2
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));

