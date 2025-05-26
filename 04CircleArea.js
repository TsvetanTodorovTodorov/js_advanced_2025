function circleArea(argument) {
  let type = typeof argument;

  if (typeof argument == 'number') {
    let result = Math.pow(argument, 2) * Math.PI;
    console.log(result.toFixed(2));
    
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
circleArea(5);
circleArea("name");
