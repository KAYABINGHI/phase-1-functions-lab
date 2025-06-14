function distanceFromHqInBlocks(scooter) {
  const hqLocation = 42;
  const distance = Math.abs(scooter - hqLocation);
  return distance;
}
function distanceFromHqInFeet(scooter) {
  const blocks = distanceFromHqInBlocks(scooter);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}
function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}