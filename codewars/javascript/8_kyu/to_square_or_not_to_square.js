// To square(root) or not to square(root)
// https://www.codewars.com/kata/to-square-root-or-not-to-square-root

function squareOrSquareRoot(array) {
  for (i=0;i<array.length;i++) {
    var square = Math.sqrt(array[i])
    if (Number.isInteger(square)) {
      array[i] = square
    } else {
      array[i] *= array[i]
    }
  }
  return array;
}

// Iterate through given array
// Assign a square root value to each number
// If the iterated value is a whole number, leave it
// If the iterated value is not a whole number, square the original