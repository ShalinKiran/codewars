function sumSquares(array) {
  let result = 0;
  return array.reduce((sum, curr) => sum + curr ** 2, 0); ;
}