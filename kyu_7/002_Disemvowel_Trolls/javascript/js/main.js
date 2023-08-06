// solution 1
function disemvowel(str) {
  let new_arr = str.split("");

  let str_fill = new_arr.filter(ele => !"aeiou".includes(ele.toLowerCase()));

  return str_fill.join("");
}

console.log(disemvowel("This website is for losers LOL!"));

// solution 2
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));

