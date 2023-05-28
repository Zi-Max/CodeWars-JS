// solution 1
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") return "found the needle at position " + i;
  }
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

// solution 2
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

// solution 3
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

