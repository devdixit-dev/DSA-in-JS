// array reversing
let revArray = [10, 20, 30, 40, 50];

console.log(revArray)
let i = 0, j = revArray.length-1

while(i!=j){
  let temp = revArray[i]
  console.log(temp) // 10 // 20

  console.log(revArray[i] = revArray[j]) // 50 // 40
  console.log(revArray[j] = temp) // 10 // 20
  i++
  j--
}

console.log(revArray)