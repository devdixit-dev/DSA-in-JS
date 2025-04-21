// questions to solve


// constant time

function getFirstElement(arr) {
  return arr[0];
}

const myArray = [1, 2, 3, 4, 5];
const firstElement = getFirstElement(myArray); // Always takes the same time, regardless of array size
console.log(firstElement);

// linear time

function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const new_array = [1, 2, 3, 4, 5];
const index = findElement(new_array, 3); // The time taken increases linearly with the size of the array
console.log(index);

// quadratic time

function findPairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}

const newArray = [1, 2, 3];
const allPairs = findPairs(newArray); // The time taken increases quadratically with the size of the array
console.log(allPairs);

// exponential time

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const answer = fibonacci(5); // The time taken increases exponentially with the input number
console.log(answer);

// factorial time

function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }

  const allPermutations = [];
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const remainingChars = str.substring(0, i) + str.substring(i + 1);
    const subPermutations = permutations(remainingChars);

    for (let j = 0; j < subPermutations.length; j++) {
      allPermutations.push(firstChar + subPermutations[j]);
    }
  }
  return allPermutations;
}

const result = permutations("abc"); // The time taken increases factorially with the length of the string
console.log(result);