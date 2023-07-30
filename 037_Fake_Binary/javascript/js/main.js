// solution 1
function fakeBin(x) {
  result = "";

  x.split("").forEach((ele) => {
    if (Number(ele) < 5) result += "0";
    else result += "1";
  });

  return result;
}

console.log(fakeBin("453855")); // 010111

// solution 2
function fakeBin(x) {
  return x.split("").map((ele) => (ele < 5 ? 0 : 1)).join("");
}

console.log(fakeBin("453855")); // 010111
