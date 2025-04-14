console.log(10 !== 10) // false

// = == ===
let a = 12; // assign value
console.log(a);

console.log(12 == 12) // check only value
console.log(12 == "12") // also true

console.log(12 === 12) // check value and type both

// && ||
console.log(10 > 6 && 5 < 9 && 18 > 9)
// if all sides are true, then it gave back true
// if first condition are false, then it skipped all other condition

console.log(10 > 6 || 5 < 9 || 18 > 9)
// if any condition is true = true

// ++ --
const postIncr = () => {
  let b = 10;
  let c = b++

  console.log(b) // 11
  // incr first and send prev value
  console.log(c) // 10
}
postIncr();

const preIncr = () => {
  let b = 10;
  let c = ++b

  console.log(b) // 11
  // incr first and send same value
  console.log(c) // 11
}
preIncr();

// Math function
const math = () => {
  const a = 20.657;

  console.log(Math.round(a)); // 21 // .6-9+incr // .0-5-decr
  console.log(Math.ceil(a)); // 21
  console.log(Math.floor(a)); // 21
  console.log(Math.trunc(18.98)) // 18
  console.log(Math.pow(2,5)) // 10 // 2x2x2x2x2
  console.log(Math.sqrt(25)) // 5
  console.log(Math.abs(-15)) // 15 // convert nag value to pos value
  console.log(Math.max(18, 19, 20, 22)) // 22
  console.log(Math.min(12, 14, 16, 2)) // 2
  console.log(Math.random()) // value between 0-1
  console.log(Math.random() * 10) // value between 0-1 multiply with 10
}

math();