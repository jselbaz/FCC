
function findLongestWord(str) {
  var arr = str.split(" ");
  var len = 0;
  for (var i = 0; i <arr.length; i++)
    if (arr[i].length > len)
      len = arr[i].length;   
  
    return len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
