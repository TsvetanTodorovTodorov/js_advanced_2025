function timeToWalk(steps, footstep, speed) {
  let distance = steps * footstep; //in meters
  //   console.log(distance);

  speed = (speed * 1000) / 3600; //.toFixed(2); // m/s
  //   console.log(speed);

  let rest = Math.floor(distance / 500);
  //   console.log(rest);

  let totalTime = distance / speed; // seconds
  //   console.log(totalTime);
  totalTime += rest * 60;

  let hours = Math.floor(totalTime / 3600);
  let minutes = Math.floor(totalTime / 60);
  let seconds = Math.ceil(totalTime % 60);

  console.log(
    `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  );
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
