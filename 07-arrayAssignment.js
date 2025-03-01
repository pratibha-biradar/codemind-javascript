const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("=== 1. log the first and last element on console ===\n");
console.log(`Given array : ${fruits_seasonal}`);
console.log(`First element of an array : ${ fruits_seasonal[0]}`);
console.log(`Last element of an array : ${ fruits_seasonal[fruits_seasonal.length-1]} \n\n`);

console.log("=== 2. Add element => Papaya before the element 'Banana' and log array ===\n");
console.log(`Given array : ${fruits_seasonal}`);

fruits_seasonal.unshift("Papaya");
console.log(`After adding new element an array : ${fruits_seasonal}\n\n`);

console.log("=== 3. Remove mango from the array ===\n");
console.log(`Given array : ${fruits_seasonal}`);
let mangoResult = fruits_seasonal.splice(4,1);
console.log(`deleted element from an array : ${mangoResult}`);
console.log(`After deleting element an array : ${fruits_seasonal}\n\n`);

console.log("=== 4. Add element 'Pineapple' at the LAST position ===\n");
console.log(`Given array : ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`After Adding element an array: ${fruits_seasonal}\n\n`);

console.log("=== 5. Insert an element 'Dragon Fruit' before 'Water Melon ===\n'");
console.log(`Given array : ${fruits_seasonal}`);
fruits_seasonal.splice(4,0,"dragon Fruit");
console.log(`After adding element an array : ${fruits_seasonal}\n\n`);

console.log("=== 6. Replace an element 'Orange' with 'Kiwi ==='\n");
console.log(`Given array : ${fruits_seasonal}`);
let orangeRes = fruits_seasonal.splice(2,1,"Kiwi");
console.log(`Deleted element : ${orangeRes}`);
console.log(`After deleting and adding element new array : ${fruits_seasonal}\n\n`);

console.log("=== 7. log the element starting from index 1 to 4 ====\n");
console.log(`Given array : ${fruits_seasonal}`);
let subArray = fruits_seasonal.slice(1,5); //slice(start index, end index)
console.log(`The elements from index 1 to 4 : ${subArray}\n\n`);

console.log("=== 8. Only select last 3 element and log on console ==> use length property ===\n");
console.log(`Given array : ${fruits_seasonal}`);
let lastElemRes =fruits_seasonal.slice (fruits_seasonal.length-3);
console.log(`Last 3 elements of an given array : ${lastElemRes}`);




















