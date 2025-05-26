function square(num) {
  let symbol = "*";
  let arr = [];

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      arr.push(symbol);
    }
    console.log(arr.join(" "));
    arr = [];
  }
}
square(7);
