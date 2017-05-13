
function reverseString(str) {
  var arr = str.split("");
  rev = arr.reverse(str);
  rev1 = rev.join("");
  return rev1;
}

reverseString("hello");
