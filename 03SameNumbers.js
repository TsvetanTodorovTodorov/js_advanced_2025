function sameNumbers(num) {
  let arr = num.toString().split("");
  let sum = 0;
  let isSame = true;

  for (const el of arr) {
    if (el !== arr[0]) {
      isSame = false;
    }
    sum += Number(el);
  }
  console.log(isSame);
  console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
