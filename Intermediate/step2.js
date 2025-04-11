for (let i = 1; i <= 20; i++){
  // console.log(i)
}

for (let i = 20; i >= 1; i--) {
  // console.log(i);
}

// Array

let arr = []
arr.push(100, 20, 30, 40, false, true, "admin");
console.log(arr);

arr.pop(); // removes last element
console.log(arr)

let newArr = new Array(3); // create new array with length
newArr[0] = 10
newArr[1] = 20
newArr[2] = 30
newArr[3] = 40
newArr[4] = 50
newArr[20] = 100

console.log(newArr)
// array is a dynamic, we stores multiple values in a continous manner

let data = new Array(2); // we declared length of array 2 [0, 1]
for(let i = 0; i < data.length; i++){
  data[i] = Number(prompt('Enter your value'));
}
console.log(data);

// array reversing
