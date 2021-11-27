let a = 42
let b = a
b++
console.log('a', a)
console.log('b', b)

let c = [1, 2, 3]
let d = c
d.push(4)

let g = [1, 2, 3, 4]

console.log('c', c);
console.log('d', d);

console.log(c === d);       //true  ( because its link)
console.log(c === g);       //false (another massive)