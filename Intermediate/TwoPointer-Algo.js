let arr = [1, 0, 1, 0, 1, 0, 1, 0, 1]

let i = 0, j = 0

while(i<arr.length){
  if(arr[i]==0){
    let temp = arr[i]
    arr[i] = arr[j]
  }
}