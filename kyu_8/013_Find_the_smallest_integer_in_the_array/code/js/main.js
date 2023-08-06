// solution 1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let result = args[0];

    for (let i = 1; i < args.length; i++)
    {
      if (result > args[i]) result = args[i];
    }

    return result;

  }
}

let obj = new SmallestIntegerFinder();

console.log(obj.findSmallestInt([1, 2, 3, 4, 5])); // 1
console.log(obj.findSmallestInt([-10, 0, -20, 10, 50, -1])); // -20
