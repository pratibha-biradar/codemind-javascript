
console.log(" Q) Write a function that reverse a string without using built in reverse() function.\n");

let str = "hello";
for (let i = str.length-1; i >= 0 ; i--) {
    const element = str[i];
    console.log(element); 
}
console.log("----Alternative way------\n");

function reverseString(str)
{
    //let str = "hello";
    for(let i = str.length-1;  i>=0 ; i--){
        const RevStr = str[i];
        console.log(RevStr);
        
    }
}
console.log(`Reverse of given string:`);

reverseString("hello");

console.log("---------------------------------------------");
console.log("\n--- 2. Write a function that finds the minimum and maxmimum elements in an array---\n");
const array = [3, 5, 1, 9, 2, 8];
//console.log(Math.min(...array));      //how to find min from array in one line
//console.log(Math.max(...array));      //how to find max from array in one line

function minMaxArray(array){
    let minNum = array[0];
    let maxNum = array[0];
    for (let index = 0; index < array.length; index++)
    {
        if (array[index] < minNum)
        {
            minNum = array[index];
        }
        else if (array[index] > maxNum) 
        {
            maxNum = array[index];
        }  
    }
    console.log(`The min number from given array: ${minNum}`);
    console.log(`The max number from given array : ${maxNum}`);
//return minNum;
}
minMaxArray(array);
//console.log(minMaxArray(array));


console.log("--------------------------------------------------------------------------------------");
console.log("\n------3. Write a function that finds the second largest element in an array without sorting-----\n");

let array1 = [10, 5, 20, 8, 25];
function secondLargeNum(array1)
{
    let largest = array1[0] ;
    let secondLarge = array1[0];
    for (let index = 0; index < array.length; index++) 
    {
        if (array1[index] > largest)
        {
            largest = array1[index];   
        }

    }
    for (let index = 0; index < array1.length; index++) 
    {
        if (array1[index] > secondLarge && array1[index] !== largest)
        {
            secondLarge = array1[index];
        }  
    }
    console.log(`Second largest number from given array : ${secondLarge}`);   
}
secondLargeNum(array1);





