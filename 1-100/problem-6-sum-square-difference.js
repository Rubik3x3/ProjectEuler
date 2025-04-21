function sumSquareDifference(n) {
  let sumOfTheSquares = 0;
  let squareOfTheSum = 0;
  for(let i = 1; i<=n; i++){
    sumOfTheSquares += (i*i);
    squareOfTheSum += i;
  }
  squareOfTheSum = squareOfTheSum * squareOfTheSum;
  let diff = squareOfTheSum - sumOfTheSquares;
  return diff;
}

sumSquareDifference(100);