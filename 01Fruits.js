function fruits(fruit, weight, pricePerKg) {
  let kg = weight / 1000;
  let money = kg * pricePerKg;
  console.log(
    `I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`
  );
}
fruits("orange", 2500, 1.8);
