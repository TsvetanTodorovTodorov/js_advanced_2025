function cookingByNumbers(...params) {
  let num = Number(params.shift());

  while (params.length) {
    let command = params.shift();

    switch (command) {
      case "chop":
        num /= 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num++;
        break;
      case "bake":
        num *= 3;
        break;
      case "fillet":
        num = (num * 0.8).toFixed(1);
        break;
    }
    console.log(num);
  }
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
