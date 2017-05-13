
function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '');
  str = str.toLowerCase();
  var arr = str.split("");
  var rev = arr.reverse(str);
  var rev1 = rev.join("");
  if (rev1 == str)
    return true;
  else
    return false;
}



palindrome("_eye");
