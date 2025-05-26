function operations(n1, n2, op) {
    let result;
  switch (op) {
    case "+":
      result = n1 + n2;break;
    case "-":
        result = n1-n2; break;
    case "*":
        result = n1*n2; break;
    case "/":
        result = n1/n2; break;
    case "%":
        result = n1 % n2; break;
    case "**":
        result = n1**n2; break;
  }
  console.log(result);
  
}
operations(5, 6, "+");
operations(3, 5.5, "*");
