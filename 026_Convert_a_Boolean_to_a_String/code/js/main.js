// solution 1
function booleanToString(b) {
  return b ? "true" : "false";
}

console.log(booleanToString(true)); // "true"
console.log(typeof booleanToString(false)); // string

// solution 2
function booleanToString(b) {
  return String(b);
}

console.log(booleanToString(true)); // "true"
console.log(typeof booleanToString(false)); // string

// solution 3
function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(true)); // "true"
console.log(typeof booleanToString(false)); // string

// solution 4
function booleanToString(b) {
  return b + "";
}

console.log(booleanToString(true)); // "true"
console.log(typeof booleanToString(false)); // string

// solution 5
function booleanToString(b) {
  return `${b}`;
}

console.log(booleanToString(true)); // "true"
console.log(typeof booleanToString(false)); // string

