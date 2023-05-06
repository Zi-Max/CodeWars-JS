// solution 1

function abbrevName(name) {
  let sp = name.split(" ");
  return `${sp[0][0]}.${sp[1][0]}`.toUpperCase();
}

console.log(abbrevName("abdel aziz"));

// solution 2

function abbrevName(name) {
  return name.split(" ").map((val) => val[0].toUpperCase()).join(".");
}

console.log(abbrevName("abdel aziz"));