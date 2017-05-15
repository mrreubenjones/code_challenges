// Mini-Max Sum
// https://www.hackerrank.com/challenges/mini-max-sum

function sorter( a, b ) {
    return a - b;
}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    arr = arr.sort(sorter);

    var minArr = arr.slice(0, 4).reduce(function (a, b) { return a + b });
    var maxArr = arr.slice(1, 5).reduce(function (a, b) { return a + b });

    console.log( minArr, maxArr );
}