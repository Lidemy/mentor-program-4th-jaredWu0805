function add(a, b) {
    var bit = 0, ans = 0, carry = 0;
    while ( a != 0 || b != 0 || carry != 0) {
        // read the digit on the far right
        var tmp = 0; // calculate the sum and will be added the ans
        var tmpA = a & 1;
        var tmpB = b & 1;

        tmp = tmpA ^ tmpB ^ carry; // determine the sum of digits
        for (var i = 0; i < bit; i++) {
            tmp = tmp << 1;
        }
        ans = ans | tmp;

        if ((tmpA + tmpB + carry) > 1) carry = 1;
        else carry = 0;
        a = a >> 1;
        b = b >> 1;
        bit++;
    }
    return ans;
}


var a = 562;
var b = 789425;
console.log(add(a, b));
console.log(a + b);

