function aggEl(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (const el of arr) {
    sum1 += el;
    sum2 += 1 / el;
  }
  console.log(sum1);
  console.log(sum2);
  console.log(arr.join(""));
  
}
aggEl([1, 2, 3]);
