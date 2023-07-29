// solution 1
function check(a, x) {
  return a.filter((ele) => ele === x).length > 0;
}

console.log(check([1, 2, 3, 4], 3)); // true
console.log(check([1, 2, 3, 4], 5)); // false
console.log(check([1, 2, 3, 4, "test1", "test2", 5, 6], "test1")); // true

// solution 2
function check(a, x) {
  return a.includes(x);
}

console.log(check([1, 2, 3, 4], 3)); // true
console.log(check([1, 2, 3, 4], 5)); // false
console.log(check([1, 2, 3, 4, "test1", "test2", 5, 6], "test1")); // true

// solution 3
function check(a, x) {
  return a.indexOf(x) > -1;
}

console.log(check([1, 2, 3, 4], 3)); // true
console.log(check([1, 2, 3, 4], 5)); // false
console.log(check([1, 2, 3, 4, "test1", "test2", 5, 6], "test1")); // true

// solution 4
function check(a, x) {
  found = false;

  a.forEach((ele) => {
    if (ele === x)
      found = true;
  });

  return found;
}

console.log(check([1, 2, 3, 4], 3)); // true
console.log(check([1, 2, 3, 4], 5)); // false
console.log(check([1, 2, 3, 4, "test1", "test2", 5, 6], "test1")); // true

// solution 5
function check(a, x) {
  found = false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      found = true;
      break;
    }
  }

  return found;
}

console.log(check([1, 2, 3, 4], 3)); // true
console.log(check([1, 2, 3, 4], 5)); // false
console.log(check([1, 2, 3, 4, "test1", "test2", 5, 6], "test1")); // true

