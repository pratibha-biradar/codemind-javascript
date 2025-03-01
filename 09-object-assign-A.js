console.log("=== 1.Mention the Properties that professor has by using Object ===");

console.log("=== 2.Include nested object 'degrees' ===");

let professor = {
    name:"Dr. Pandit Devshette", 
    department:"Information Technology",
    experience: 12,
    isPermanent:true,
    subjectToTeach:["Java","Computer Security"],
    degrees :{
        engineering:'CSC',
        MTech:'Artificial Intelligence',
        PHD:'Adv Computing'
    },
};
 
 console.log("=== 3. Add one array -> 'certificates' with his values ===");
 professor.certificates=["Hacker Rank Participation",  "Certificate in IFE course",  "Certificate in Adv Programming"];
 //professor.certificates = [];
 //professor.certificates.push("Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming");
 //console.log(professor.certificates);
 //console.log(professor);

 
 console.log("=== 4. After object creation ===\n\n");
 for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = JSON.stringify(professor[key]);
        //console.log(key, ":" ,element);  
        console.log(`${key} : ${element}`); 
        
    }
 }

 console.log("\n=== 5. Add new property like totalExperience: '14 years' and log object on console===\n");
 professor.totalExperience = "14 years";
 console.log(professor);
//  for (const key in professor) {
//     if (Object.prototype.hasOwnProperty.call(professor, key)) {
//         const element = professor[key];
//         console.log(`${key} : ${element}`); 
        
//     }
//  }

 console.log("=== 6. Modify an existing that is isPermanent property and log result on console ===\n");
 professor.isPermanent=true;
 console.log(professor);
 //array and nested loop not displaying their values here

 console.log("\n\n=== 7. Add one new certificate -> 'Oracle Certified' at the 2nd index of array ->certificates ====\n");
 console.log(`Already created array is : ${professor.certificates} \n`);
 professor.certificates.splice(2,0,"Oracle Certificate");
 console.log(`Updated certificates array is: ${professor.certificates}\n\n`);
 
 console.log("=== 8. log the last element of the array-> certificates ===\n");
 console.log("Last element of an array certificates is : ",professor.certificates[professor.certificates.length-1]);

 console.log("\n\n=== 9. log complete object on console using for..in loop ==== \n");

 function professorDetails(object) {
    for (let key in object) {
        if (typeof object[key] === "object" && object[key] !== null) {
            console.log(`${key} :`);
            if (Array.isArray(object[key])) {
                console.log(`  ${object[key].join(", ")}`); // Display array elements
            } else {
                for (let Key1 in object[key]) {
                    console.log(`  ${Key1}: ${object[key][Key1]}`);
                }
            }
        } else {
            console.log(`${key}: ${object[key]}`);
        }
    }
}
professorDetails(professor);



 
//  for (const key in professor) {
//     if (Object.prototype.hasOwnProperty.call(professor, key)) {
//         const element = professor[key];
//         if (typeof element == "object") {
//             for (const key in element) {
//                 const element1 = element[key];
//                 console.log(`${key} : ${element1}`);
                 
//             }
//         } else {
//             console.log(`${key} : ${element}`);
            
//         }
        
//     }
//  }
 
 
 


 
 