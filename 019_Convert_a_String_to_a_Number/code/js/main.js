// solution 1
stringToNumber = function (str) {
  return Number(str);
};

console.log(stringToNumber("10"));

// solution 2
stringToNumber = function (str) {
  return parseInt(str);
};
console.log(stringToNumber("10"));

// solution 3
stringToNumber = function (str) {
  return +str;
};
console.log(stringToNumber("10"));
