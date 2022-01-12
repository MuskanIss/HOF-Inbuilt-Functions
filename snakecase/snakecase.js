var arr = [
  "this",
  "is",
  "code",
  "to",
  "covert",
  "array",
  "of",
  "strings",
  "to",
  "snake",
  "case",
  "string",
];
console.log(arr.reduce((prev, curr) => prev + "_" + curr));
