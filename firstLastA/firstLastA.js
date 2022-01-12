var str = ["hi", "a", "apple", "India", "Africa", "America"];
str
  .filter(
    (x) =>
      x.length > 0 &&
      (x[0] === "a" ||
        x[0] === "A" ||
        x[x.length - 1] === "a" ||
        x[x.length - 1] === "A")
  )
  .map((x) => console.log(x));
