function mutation(arr) {
    var string = arr.toString();
    string = string.toLowerCase();
    var arrLetters = [];
    var arrLetters1 = [];
    var string1 = string.split("");
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] != ',') {
            arrLetters.push(string1[i]);          
        } else {
            var spot = i;
            string1.splice(0, spot + 1);
        }
        }
    for (var i = 0; i < string1.length; i++) {
    arrLetters1.push(string1[i]);
        }
    console.log(arrLetters);
    console.log(arrLetters1);
    for (var i = 0; i < arrLetters1.length; i++) {
        console.log(arrLetters.indexOf(arrLetters1[i]));
        if (arrLetters.indexOf(arrLetters1[i]) == -1) {
            var flag = 1;
        } 
    }
    if (flag == 1) {
        console.log("False");
        return false;
    } else {
        console.log("True");
        return true;
    }
};
    

mutation(["hello", "hey"]);
