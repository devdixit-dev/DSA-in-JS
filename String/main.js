let string = 'hello'

console.log(string.length)

console.log(string.slice(0, 4)) // 0-3

console.log(string.substring(0, 4)); // 0-3

console.log(string.substring(0)); // 0-end of the string

console.log(string.concat(" ", "world")); // hello world

console.log(string.trim()); // removes spaces from both sides

console.log(string[1]); // value = e
console.log(string.charAt(1)); // value = e

// question 1 - print every char in new line
for(let i = 0; i<string.length; i++) {
  console.log(string.charAt(i));
}

// question 2 - print in reverse order - this method is not usefull for long string (not effective)
// let s = "naman"
// let rev = ""

// for(let i = s.length-1; i>=0; i--){
//   rev = rev + s.charAt(i)
// }

// console.log(rev)

// // check string is palindrome or not ?
// if (rev == s) console.log("palindrome")
// else console.log("no palindrome")

// effective method with the pointer method (check palindrome)
const strArray = "naman"

let i = 0;
let j = strArray.length-1

let isPalindrome = true

while(i<j){
  if(strArray.charAt(i) != strArray.charAt(j)){
    isPalindrome = false
    break
  }
  i++
  j--
}

// ternary operator
isPalindrome 
? 
console.log("palindrome") 
: 
console.log("no palindrome")


// convert this string "AbCDeF" to "aBcdEf"
// if char is uppercase convert it to lowercase, if lowercase then convert it to uppercase

// hello
// h - 1, e - 1, l - 2, o - 1