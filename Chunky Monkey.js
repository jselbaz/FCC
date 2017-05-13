
function chunkArrayInGroups(arr, size) {
    var newArray = [];
    while (arr.length > 0) {
        var chunk = arr.splice(0, size);
        newArray.push(chunk);
        }
    return newArray;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);
