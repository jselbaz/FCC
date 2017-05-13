
function largestOfFour(arr) {
    var largestNums = [];
  for (var i = 0; i < arr.length; i++) {
        var greatest = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > greatest){
        greatest = arr[i][j];
      }
        }
      largestNums.push(greatest);
    }
      return largestNums;
  }
  // You can do this!



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
