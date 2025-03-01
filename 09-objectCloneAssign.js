console.log("=== 1. Create the object bankSbi using literals with 4 props =====\n");
console.log("=== 2. Create the object bankLocation using literals with  props=> street, city, pin =====\n");
console.log("=== 3. Clone the above objects using Object.assign() and log details on console===\n ");


const sbiBank = {
    bankName: "State Bank of India",
    location: "Shivaji Nagar Pune",
    accountNo : 2537125381,
    ifsc :"sbi873822",
}
const bankLocation = {
    street : "Chintamani park road",
    city : "Pune",
    pin : 411014,
}

const clonedBankDetails = Object.assign({}, sbiBank);
console.log("before cloning the sbiBank details are:", sbiBank);
console.log("After clone the  sbiBank details are:", clonedBankDetails);

const clonedBankLocation = Object.assign({}, bankLocation);
console.log("\nbefore cloning the Bank Location details are:", bankLocation);
console.log("After clone the  Bank Location details are:", clonedBankLocation);

console.log("\n==== 4. Create one more object rateOfInterest with props =====\n");
const rateOfInterest = {
    homeLoanInterest : "9.5%",
    personalLoanInterest : "10.8%",
    dueInterest : "4.5%"
}
console.log("New object rateOfInterest: ",rateOfInterest)

console.log("\n === 5. merge the  step 1, 2 and 4 objects into new object sbiDetails === \n ");

const sbiDetails = Object.assign({},sbiBank, bankLocation, rateOfInterest);
console.log("After merging all objects: ",sbiDetails);

console.log("\n=== 6. Traverse this merged object step 5 using for..in loop and log the result ====\n ");
console.log("\nFinal SBI Bank details are here ==>\n",);
for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element = JSON.stringify(sbiDetails[key]);
        console.log(`${key}  :  ${element}` );
        
                
    }
}






   