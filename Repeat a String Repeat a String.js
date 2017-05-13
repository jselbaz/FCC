function repeatStringNumTimes(str, num) {
  // repeat after me
    var output = []
    for (var i = 0; i < num; i++) {
        output.push(str); 
    }
    output = output.join("");
  return output;
}

repeatStringNumTimes("abc", 3);
