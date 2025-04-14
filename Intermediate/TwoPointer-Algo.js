let arr = [1, 0, 1, 0, 1, 0, 1, 0, 1]

let i = 0
let j = 0

while(i<arr.length){
  if(arr[i]==0){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j++
  }
  i++
}

console.log(arr)


// practice set - done
let newArr = [-2, -1, 2, 4, 7, -8, -9 , 1]
let x = 0
let y = 0

while(x < newArr.length) {
  if(newArr[x] < 0){
    let temp = newArr[x]
    newArr[x] = newArr[y]
    newArr[y] = temp
    y++
  }
  x++
}

console.log(newArr)