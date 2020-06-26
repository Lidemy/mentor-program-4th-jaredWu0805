function reverse(str) {
    var reverseStr = '';
    for (var i = str.length; i > 0; i--) {
        reverseStr += str[i-1];
    }
    console.log(reverseStr);
}

