// analyzing a simple function
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// analyzing function with nested loop
function multiplyMatrices(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

// analyzing code snippets

function printFirstAndLast(arr) {
  console.log(arr[0]);
  console.log(arr[arr.length - 1]);
}

function checkDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

function printAllPossibleSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}

// Exercise 2: Comparing Algorithms
// You have two algorithms for sorting an array:

// Algorithm A has a time complexity of O(n log n).
// Algorithm B has a time complexity of O(n²).
// For what input sizes would you expect Algorithm A to perform better than Algorithm B? Explain your reasoning.

// Exercise 3: Identifying Dominant Terms
// Simplify the following Big O expressions by dropping non-dominant terms and constant factors:

// O(100n + n²)
// O(5n log n + n)
// O(2ⁿ + n⁵)
// O(1000 + log n)