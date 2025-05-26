function GCD(n1, n2) {
  let minNum = Math.min(n1, n2);

  for (let i = minNum; i >= 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      console.log(i);
      break;
    }

    
  }
}
GCD(2154, 458);
GCD(15, 5);
