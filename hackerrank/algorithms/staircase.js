// Staircase 
// https://www.hackerrank.com/challenges/staircase
// Paired with @razzlepdx

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
        
    // Iterate through "n" rows
    for (let i = 1; i <= n; i++) {
            let row = [];

            // Create row array
            row.push(' '.repeat(n-i));
            row.push('#'.repeat(i));

            // Print array
            console.log(row.join(''));
    }
}                                                    

