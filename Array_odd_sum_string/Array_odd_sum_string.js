var string = ["black", "pink", "green", "yellow", "orange", "red", "white"];
var lengthSum = string
  .filter((x) => x.length % 2 != 0)
  .reduce((sum, curr) => sum + curr.length, 0);
console.log(lengthSum);
