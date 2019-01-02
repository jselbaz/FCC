function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  while (min <= max) {
    sum += min
    min += 1;
  }
  return sum 
}
a
