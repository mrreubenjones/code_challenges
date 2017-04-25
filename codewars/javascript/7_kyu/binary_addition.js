// Binary Addition
// https://www.codewars.com/kata/binary-addition
// Turns out I could just return (a+b).toString(2)
// :) :) :)

function addBinary(a,b) {
        var sum = a + b;
        var exponent = (String(sum).length * 10);
        var binaryString = "";
              
        for (let i = exponent; i >= 0; i--) {
                let twoPowered = (Math.pow(2, i));
                              
                if (sum >= twoPowered) {
                        binaryString += "1";
                        sum -= twoPowered;
                } else {
                        if (binaryString.length > 0) { binaryString += "0"; }
                }
        }
        return binaryString;
}

//1  Find sum of arguments
//2  Iterate through powers of 2, start with exponent relatively larger than sum
//3  Check: Is sum greater than (2 ** i)?
//4  If yes, add a "1" placeholder to the string, and subtract (2 ** i) from sum
//5  If not, and the string has at least one placeholder, add a "0" placeholder
