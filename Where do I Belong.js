function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a,b){return a-b});
    var test = arr.indexOf(num);
  return test;
}
