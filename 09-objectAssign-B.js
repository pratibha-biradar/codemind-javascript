console.log("==== `1. Create an objects with data member and member function =====\n");
console.log("\n====1.=====\n");
const sbiBank = {
    bankName: "State Bank of India",
    location: "Shivaji Nagar Pune",
    accountNo : 2537125381,
    ifsc :"sbi873822",
    interestRate : "8.5 %",
   // function1 : function showDetails() {
   showDetails(){  
   console.log(` Bank Name: ${this.bankName}, \n Location: ${this.location}, \n Account Number: ${this.accountNo}, \n IFSC Code: ${this.ifsc} \n Interest Rate: ${this.interestRate}`);
    },
}
sbiBank.showDetails();

console.log("\n====2.=====\n");
const axisBank = {
    bankName : "Axis Bank",
    location : "Pune Station",
    accountNo : 45654254677,
    ifsc : "axis887767",
    interestRate : "9.7%",
    showDetails(){  
    console.log(` Bank Name: ${this.bankName}, \n Location: ${this.location}, \n Account Number: ${this.accountNo}, \n IFSC Code: ${this.ifsc} \n Interest Rate: ${this.interestRate}`);
    }, 
}
axisBank.showDetails();

console.log("\n====3.=====\n");
const hdfcBank = {
    bankName : "HDFC Bank",
    location : "Kharadi",
    accountNo : 8787654543,
    ifsc : "hdfc8765443",
    interestRate : "7.6%",
    showDetails(){  
    console.log(` Bank Name: ${this.bankName}, \n Location: ${this.location}, \n Account Number: ${this.accountNo}, \n IFSC Code: ${this.ifsc} \n Interest Rate: ${this.interestRate}`);
    },
}
hdfcBank.showDetails();
console.log("\n====4.=====\n");

const yesBank = {
    bankName : "yes Bank",
    location : "Pune Camp",
    accountNo : 87654383929,
    ifsc : "yes8765453",
    interestRate : "10.8%",
    showDetails(){  
    console.log(` Bank Name: ${this.bankName}, \n Location: ${this.location}, \n Account Number: ${this.accountNo}, \n IFSC Code: ${this.ifsc} \n Interest Rate: ${this.interestRate}`);
    },
}
yesBank.showDetails();


