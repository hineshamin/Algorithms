//https://app.codesignal.com/company-challenges/uber/gsjPcfsuNavxhsQQ7

function perfectCity(departure, destination) {
  if (Number.isInteger(departure[0]) && !Number.isInteger(destination[0])) {
    return (
      Math.abs(departure[0] - destination[0]) +
      Math.abs(departure[1] - destination[1])
    );
  }
  if (Number.isInteger(departure[1]) && !Number.isInteger(destination[1])) {
    return (
      Math.abs(departure[0] - destination[0]) +
      Math.abs(departure[1] - destination[1])
    );
  }
  if (Number.isInteger(departure[0])) {
    flip(departure);
    flip(destination);
  }
  if (Math.ceil(departure[0]) === Math.ceil(destination[0])) {
    if (departure[1] === destination[1])
      return Math.abs(departure[0] - destination[0]);
    let low = Math.floor(destination[0]);
    let high = Math.ceil(destination[0]);
    return (
      Math.abs(departure[1] - destination[1]) +
      Math.min(
        Math.abs(departure[0] - low) + Math.abs(destination[0] - low),
        Math.abs(departure[0] - high) + Math.abs(destination[0] - high)
      )
    );
  }
  if (destination[0] < departure[0]) {
    return (
      Math.abs(departure[1] - destination[1]) +
      Math.ceil(destination[0]) -
      destination[0] +
      departure[0] -
      Math.floor(departure[0])
    );
  }
  if (destination[0] > departure[0]) {
    return (
      Math.abs(departure[1] - destination[1]) +
      Math.ceil(departure[0]) -
      departure[0] +
      destination[0] -
      Math.floor(destination[0])
    );
  }
}

function flip(arr) {
  let temp = arr[1];
  arr[1] = arr[0];
  arr[0] = temp;
}
