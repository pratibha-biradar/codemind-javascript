console.log(`Checking given number is even or Odd`);
var IsEvenOrOdd = function (num) {
   if (num%2 == 0) {
    console.log(`The given Number ${num} is EVEN.`);
    }
    else{
        console.log(`The given number ${num} is ODD.`);
        
    }
    
}
IsEvenOrOdd(20);
IsEvenOrOdd(31);

console.log(`\n *******Grading System depends on marks obtained******\n`);
var gradeSystem = function(grade){
    if (grade >= 80) {
        console.log(`Student got A grade\n`);
    }else if (grade >= 70) {
        console.log(`Student got B grade\n`);
        
    } else if (grade >= 60) {
        console.log(`Student got C grade\n`);
        
    } else{
        console.log( `Student got Failed this year\n`);

    }
}
console.log(`Marks Obtained : 85\t\t\t`);
gradeSystem(85);
console.log(`Marks obtained : 75\t\t\t`);
gradeSystem(75);
console.log(`Marks obtained : 65\t\t\t`);
gradeSystem(65);
console.log(`Marks obtained : 56\t\t\t`);
gradeSystem(56);

console.log(`*****Checking eligibility for Loan******`);
var loanEligibile = function(age,income){
    if (age >= 18) {
        if (income >= 30000) {
            console.log(`You are eligible for Loan As your AGE :${age} and income : ${income}`);
            
        } else {
            console.log('You are not eligible for loan As your income is not matching with our criteria As your AGE : ${age} and income : ${income}');
            
        }
    } else {
        console.log('Sorry, you are not eligible for Loan as your age criteria is not matching with our specified one As your AGE : ${age} and income : ${income}');
        
    }
}
loanEligibile(18,40000);
loanEligibile(18,30000);
loanEligibile(18, 27000);
loanEligibile(17,50000);

console.log(`*****Finding Leap Year********`);
var leapYear = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    }else{
        console.log(year + " is not a leap year.\n");
        
    }
}
leapYear(2024);
leapYear(2025);







function dreamJob(isGotPlacement) {
    if (isGotPlacement) {
        console.log("I will buy gifts for my family");
        var isMNC = true;
        if (isMNC) {
                console.log("I will have US trip");
                
        } else {
            console.log("I will have GOA trip");
            
            
        }
    }else{
        console.log("I will buy small gift for me");
        
    }
}
dreamJob(true)



    
