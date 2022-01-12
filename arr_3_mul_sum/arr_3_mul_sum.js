var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var SumOf3 = arr
  .filter((x) => x % 3 == 0)
  .reduce((sum, curr) => sum + curr * curr * curr, 0);
console.log(SumOf3);
