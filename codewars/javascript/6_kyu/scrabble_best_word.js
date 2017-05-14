// Scrabble Best Word
// https://www.codewars.com/kata/scrabble-best-word/train/javascript
// By Reuben Jones, May 15, 2017

function getBestWord( points, words ) {
  // Initialize required values
  var charValues = [];
  var maxValue = 0, maxValueLength = 0, maxValueIndex = 0;

  // Iterate through words array, assigning values to new array
  for ( let i = 0; i < words.length; i++ ) {
      // Create new array for new word
      charValues.push([]);
      // Push character values into nested array
      for ( let j = 0; j < words[i].length; j++ ) {
          charValues[i].push( points[ words[i][j].charCodeAt() - 65 ] );
      }
  }

  // Compare values to max values, updating max values as necessary
  for ( let i = 0; i < charValues.length; i++ ) {
      // Create temporary value for sum of each array
      let newValue = charValues[i].reduce( function arrSum(a, b) {
          return a + b;
      });
      // Compare the temp value to current max values:
      // If greater than maxValue, update max values
      // If equal to maxValue, check length and update as necessary
      if ( newValue > maxValue || ( newValue === maxValue && charValues[i].length < maxValueLength )) {
          maxValue = newValue;
          maxValueLength = charValues[i].length;
          maxValueIndex = i;
      }
  }

  return maxValueIndex;
}