// Statistics 101: Coin Sampling
// https://www.codewars.com/kata/statistics-101-coin-sampling

function sample(coin) {
  // Measure the number of head results
  var heads = 0;

  // Run the coin toss 10000 times
  for (let i = 0; i < 10000; i++) {
    if (coin()) { heads++; }
  }

  // Return heads probability
  return heads / 10000;
}