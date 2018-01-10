function rot13(str) { // LBH QVQ VG!
    var newStr = []
    for (var i = 0; i < str.length; i++) {
        var caesar = str.charCodeAt(i)
        if (caesar >= 65 && caesar <= 90) {
            if (caesar >= 78) {
                caesar -= 26;
                }
            caesar += 13;
        }
            newStr.push(String.fromCharCode(caesar));
    }
    var final = newStr.join("");
  return final;
}