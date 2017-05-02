// Diagonal Difference
// https://www.hackerrank.com/challenges/diagonal-difference
// Solved May 2, 2017

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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    // Initialize values for top corners
    var i = 0,
        d1 = a[i][i],
        d2 = a[i][n-1];

    // Loop through arrays, incrementing diagonal values
    while (i < a[0].length-1){
        n--;
        d1 += a[i+1][i+1];
        d2 += a[i+1][n-1];
        i++;
    }

    // Calculate absolute difference
    var diff = Math.abs(d1-d2);

    // Print the difference
    console.log(diff);
}