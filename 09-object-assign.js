const professor = {
    name : "Dr. Pandit Devshette",
    department : "Information Technology",
    experience : 10,
    isPermanent : false ,
    subject_to_teach : ["Java", "Networking"],  //here not accepting kebab case
    degrees : {
        engineering:"CSC",
        MTech:"Artificial Intelligence",
        PHD:"Adv Computing",
    },
    certificates : ["Hacker Rank Participation",  "Certificate in IFE course",  "Certificate in Adv Programming"],
}

professor.totalExperience = "14 years";
console.log(professor.totalExperience);

professor.isPermanent = true ;
console.log(professor.isPermanent);

professor.certificates.splice(2,0,"Oracle Certificate");
console.log(professor.certificates);

console.log(professor.certificates.at(-1));

console.log("====================");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = JSON.stringify(professor[key]);
        //console.log(key, ":" ,element);  
        console.log(` ${key} : ${element}`); //something wrong with backticks  
    }
}



