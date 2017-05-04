// Plus Minus
// https://www.hackerrank.com/challenges/plus-minus
// Solution by Reuben; May 3, 2017

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    // Solution begins. Initialize variables:
    var positive = 0,
        negative = 0,
        zero = 0;

    // Add value to variables
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] < 0 ) { negative++ }
        else if ( arr[i] === 0 ) { zero++ }
        else { positive++ }
    }

    // Calculate percentages
    positive /= n;
    negative /= n;
    zero /= n;

    // Print!
    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
}
