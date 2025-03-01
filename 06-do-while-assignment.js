console.log("=== 1. Print numbers 5 to 15 by incrementing 1 ===\n");
var i = 5;
var numbers = [];
do{
    numbers.push(i);
    i++;
}while(i <= 15)
console.log(numbers.join("    "));

console.log("\n\n=== 2. Print numbers from 50 to 40 by decrementing 1 ===\n");
var i = 50;
var numbers = [];
do {
    numbers.push(i);
    i--;
} while (i >= 40);
console.log(numbers.join("    "));

console.log("\n\n=== 3. Print first 15 ODD numbers ===\n");
var i = 1;
var numbers = [];
do {
    numbers.push(i);
    i += 2;
} while (i <= 29);
console.log(numbers.join("    "));

console.log("\n\n=== 4. Print first 10 EVEN numbers ===\n");
var i = 0;
var numbers = [];
do {
    numbers.push(i);
    i += 2;
} while (i <= 20);
console.log(numbers.join("    "));

console.log("\n\n=== 5. Print table of 5 ====\n");
var i = 5;
var numbers = [];
do {
    numbers.push(i);
    i += 5;
} while (i <= 50);
console.log(numbers.join("    "));

console.log("\n\n=== 6. Print table of 10 ===\n");
var i = 10;
var numbers = [];
do {
    numbers.push(i);
    i += 10;
} while (i <= 100);
console.log(numbers.join("    "));

console.log("\n\n=== 7. Print table of 10 in reverse order ===\n");
var i = 100;
var numbers = [];
do {
    numbers.push(i);
    i -= 10;
} while (i >= 10);
console.log(numbers.join("    "));












