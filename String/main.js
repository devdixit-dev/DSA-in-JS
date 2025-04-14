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

// question 2 - print in reverse order
let s = "hello"
let rev = ""

for(let i = s.length-1; i>=0; i--){
  rev = rev + s.charAt(i)
}

console.log(rev)

// 26:22 - explanation