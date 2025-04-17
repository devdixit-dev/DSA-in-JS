// left rotation by 1 element

const leftRotation = () => {
  let array = [1, 2, 3, 4, 5]

  let copy = array[0]

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array[array.length - 1] = copy

  return array;
}

const rightRotation = () => {

  let array = [1, 2, 3, 4, 5]

  let copy = array[array.length - 1]

  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = copy

  console.log(array)

}

const nestedLoop = () => {
  for(let j = 1; j <= 2; j++){
    console.log(j + " execution");

    for(let i = 1; i <= 1; i++){
      let ans = leftRotation()
      console.log(ans)
    }
  }
}

nestedLoop()