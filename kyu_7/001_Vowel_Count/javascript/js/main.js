// solution 1
function getCount(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) result++;
  }

  return result;
}

console.log(getCount("abracadabra")); // 5

// solution 2
function getCount(str) {
  let result = 0;
  let match = "aeiou";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < match.length; j++) {
      if (str[i] === match[j]) {
        result++;
        continue;
      }
    }
  }

  return result;
}

console.log(getCount("abracadabra")); // 5

