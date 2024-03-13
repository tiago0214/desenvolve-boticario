//atribuição por referência; preciso do spread operator para fazer uma cópia no array.
const arra = [12, 13, 14, 15];
const arra2 = [...arra];

arra.push(16);

console.log(arra);
console.log(arra2);


//atribuição por valores
let n1 = 5
let n2 = n1;

n1 = 9;

console.log(n1);
console.log(n2);