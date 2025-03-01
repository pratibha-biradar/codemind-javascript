const employee = `{
    "name" : "Aleix Melon",
    "id":"E00245",
    "role":["Dev", "DBA"],
    "age":23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
        "street": "32, Laham st.",
    "city":"Innsbruck",
    "country": "Austria"
    },
    "referred-by":"E0012"
}`
const employeeObj = JSON.parse(employee);
console.log(employeeObj);
console.log("\nLog on console role-->'['Dev', 'DBA']\n");
console.log("==>  ",employeeObj.role[0],"\n");

console.log("log on console only last name --> 'Aleix melon'\n");
let nameResult = employeeObj.name.split(" ");
console.log("==>  ",nameResult[1],"\n");

console.log(`log only joining year of employee --> '11-12-2019'\n`);
//const dateOfJoin = employeeObj.doj.split("-").pop();
//console.log(dateOfJoin);

const dateOfJoin = employeeObj.doj.split("-");
console.log(`==>  ${dateOfJoin[2]}`);










 




  

