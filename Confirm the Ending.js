
function confirmEnding(str, target) {
    return target === str.substr(str.length-target.length);
  //str.length-target.length -> start comparison at last X chars where X is the value of the target
  // Bastian (7) - n (1) = start at position 6. Does str.substr(6) === target? Does n === n? yes
  // string (28) - name (4) = 24. Start at pos 24. Does str.substr(24) === target. Does name === name? yes
  // Open sesame (11) - pen (3) = 8. Does str.substring(8) === target? Does ame === pen? no
  // does target === str.substring at location X
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "pen");