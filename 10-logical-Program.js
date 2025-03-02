console.log("----- 1. WAP to count the even number from the array ----\n");

 let array = [10, 20, 45, 30, 77, 60];
 function countEven()
 {
    let count = 0;
    for (let i = 0; i < array.length; i++) 
    {
        const element = array[i];
        if (element % 2 == 0) 
        {
            console.log(element);
            count = count +1;
        }   
    }
    console.log(`And Toatl count of Even number from given array is : ${count}\n\n`);
 }
 console.log(`This is an even numbers from array : `);
 countEven();

console.log("------------------------------------------------------------------------");
console.log("-----2. WAP to count the vowels including lower and upper case ----- \n");
//const myLove = "I Love only JavaScript";

function countVowels(myLove){
    console.log(`The vowels from given string: ${myLove}`);
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    for (const letr of myLove) {
        if (vowels.has(letr)) {
            console.log(letr);
            count++;
        }
    }
    
    console.log(`The total count of vowels from given string is : ${count}\n\n`);
    
}
countVowels("I Love only JavaScript");

console.log("-------------------------------------------------------------------------------------\n");
console.log("------ 3. WAP to count the a character including upper and lower character----\n");
 function countAchar(sentence) {
    let count = 0;
    const charA = new Set(['a', 'A']);
    for (const letA of sentence) {
        if(charA.has(letA))
        {
        count++;
        }
    }
    console.log(`The given sentence is : "${sentence}" and count of char "a/A" in the sentence is : ${count}`);
    
 }
 countAchar("JavaScript LANGUAGE");





 

 
