console.log(`*****Check whether he or she is eligible for voting or not (Using nested-if-else statement)******\n`);

var voteEligible= function(age) {
    if (age==0 || age <0 || age>=130 ) {
        console.log(`\t\t\t Oop's You entered Invalid data, AGE: ${age}`);
        
    } else {
        
        if (age>=18) {
            console.log(`\t\t\t Hey, "Congrats" eligible for vote, AGE: ${age}`);
            
        } else {
            console.log(`\t\t\t  "Sorry" NOt eligible for vote , AGE: ${age}`);
        }
    }
}
console.log("1.Checking if you are entering age as 0 or any Negative value or age equal greater than 130:\n");
voteEligible(0);
voteEligible(-19);
voteEligible(130);

console.log(`\n2. Checking if you are passing age number equal or greater than 18:\n `);
voteEligible(20);

console.log(`\n2. Checking if you are passing age number LESS than 18:\n `);
voteEligible(16);


