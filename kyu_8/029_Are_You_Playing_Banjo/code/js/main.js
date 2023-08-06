// solution 1
function areYouPlayingBanjo(name) {
  return name[0] == "r" || name[0] == "R" ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Omar")); // "Omar does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"

// solution 2
function areYouPlayingBanjo(name) {
  return (
    (name[0].toLowerCase() != "r" ? name + " does not play" : name + " plays") + " banjo"
  );
}

console.log(areYouPlayingBanjo("Omar")); // "Omar does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"

