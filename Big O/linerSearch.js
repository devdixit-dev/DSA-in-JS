// interger operation
function linearSearch(arr, target) {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element matches the target
    if (arr[i] === target) {
      // If a match is found, return the index
      return i;
    }
  }
  // If the target is not found after checking all elements, return -1
  return -1;
}

// string operation
const myArray = [5, 12, 8, 2, 15, 7];
const targetValue = 8;

const answer = linearSearch(myArray, targetValue)
console.log(answer) // answer = 2 (found value at the index 2)

function stringSearch(arr, target) {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target){
      return i
    }
  }
  return -1
}

const array = ["alice", "bob", "marley", "johnson", "bryan", "john", "dev"];
const target = "bryan"

const output = stringSearch(array, target)
console.log(output) // output = 4 (found value at the index 4)

// object operation

const objectSearch = (array, targetId) => {
  for(let i = 0; i < array.length; i++){
    if(array[i].id === targetId){
      return i
    }
  }
  return -1
}

const object = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'john' }
]

const id = 2;

const found = objectSearch(object, id)
console.log(found)