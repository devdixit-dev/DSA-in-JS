// array reversing
let revArray = [10, 20, 30, 40, 50];

console.log(revArray)
let i = 0
let j = revArray.length-1

while(i!=j){
  let temp = revArray[i]
  console.log(temp) // 10 // 20

  console.log(revArray[i] = revArray[j]) // 50 // 40
  console.log(revArray[j] = temp) // 10 // 20
  i++
  j--
}

console.log(revArray)


// solve this #1
// let arr = [50, 40, 30, 20, 10]

// let x = 0
// let y = arr.length-1
// console.log(y)

// while(y!=x) {
//   let temp = arr[x]
//   arr[x] = arr[y]
//   arr[y] = temp
//   x++
//   y++
// }

// console.log(arr)