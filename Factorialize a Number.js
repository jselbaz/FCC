// Recursive
function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
  return num*factorialize(num-1);
}
}

// iterative
function factorialize(num) {
  var n = 1;
  for (var i = 1; i <= num; i++) {
    n *= i;
  }
  return n;
}

factorialize(5);
