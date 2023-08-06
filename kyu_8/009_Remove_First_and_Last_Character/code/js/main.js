// solution 1
function removeChar(str) {
  let result = "";

  for (let i = 1; i < str.length - 1; i++)
    result += str[i]

    return result;

}

console.log(removeChar("java")); // av

// solution 2
function removeChar(str) {
  return str.slice(1, -1);

}

console.log(removeChar("java")); // av

// solution 3
function removeChar(str) {
  return str.slice(1, str.length - 1);

}

console.log(removeChar("java")); // av

