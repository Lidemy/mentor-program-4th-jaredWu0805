function join(arr, concatStr) {
    var temp = '';

    for (var i = 0; i < arr.length - 1; i++) {
        temp += arr[i];
        temp += concatStr;
    }
    temp += arr[arr.length - 1];

    return temp;
}

function repeat(str, times) {
    var temp = '';
    for (var i = 0; i < times; i++) {
        temp += str;
    }
    return temp;
}
