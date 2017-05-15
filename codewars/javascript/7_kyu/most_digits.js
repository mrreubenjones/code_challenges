// Most Digits
// https://www.codewars.com/kata/most-digits/train/javascript

function findLongest(array) {
    var longest = array[0];
    for ( let i = 1; i < array.length; i++ ) {
        if ( array[i].toString().length > longest.toString().length ) {
          longest = array[i];
        }
    }
    return longest;
}