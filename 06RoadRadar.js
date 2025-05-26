function roadRadar(currSpeed, area) {
  function speeding(speedLimit2) {
    if (currSpeed <= speedLimit2) {
      console.log(`Driving ${currSpeed} km/h in a ${speedLimit2} zone`);
    } else if (currSpeed - speedLimit2 <= 20) {
      let difference = currSpeed - speedLimit2;
      let status = "speeding";
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit2} - ${status}`
      );
    } else if (currSpeed - speedLimit2 <= 40) {
      let difference = currSpeed - speedLimit2;
      let status = "excessive speeding";
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit2} - ${status}`
      );
    } else {
      let difference = currSpeed - speedLimit2;
      let status = "reckless driving";
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit2} - ${status}`
      );
    }
  }

  let speedLimit;

  switch (area) {
    case "motorway":
      speedLimit = 130;
      speeding(speedLimit);
      break;
    case "interstate":
      speedLimit = 90;
      speeding(speedLimit);
      break;
    case "city":
      speedLimit = 50;
      speeding(speedLimit);
      break;
    case "residential":
      speedLimit = 20;
      speeding(speedLimit);
      break;
  }
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
