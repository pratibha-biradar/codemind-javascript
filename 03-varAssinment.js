console.log("***Variable myFullName without initialization ***");
var myFullName;
console.log(myFullName);
var nameTypeOf = typeof(myFullName);
console.log("Type of full name:",nameTypeOf);

console.log("***Variable myFullNme with initalization***");
var myFullName="Pratibha Biradar";
console.log("my name is:",myFullName);
var fullNameTypeOf=typeof(myFullName);
console.log("type of full Name: ",fullNameTypeOf);

console.log("***Variable myFullNme with values override***");
var myFullName="Pratibha Madhav Biradar";
console.log("My fullname is:",myFullName);
var myfullnameTypeOf=typeof(myFullName);
console.log("type of full name: ",myfullnameTypeOf);

console.log("***variable myLove with initialization & Declaration on same line***");
var myLove="I love only JS";
console.log("My Love:",myLove);
var myLoveTypeOf=typeof(myLove);
console.log("Type of My love is:",myLoveTypeOf);

console.log("***Form:using Primitve data types:string,Number,boolean***");
var firstName="Pratibha";
console.log("First Name: ",firstName);
var firstNameTypeOf=typeof(firstName);
console.log("Type of first name :",firstNameTypeOf);

var lastName="Biradar";
console.log("Last Name: ",lastName);
var lasttNameTypeOf=typeof(lastName);
console.log("Type of last name :",lasttNameTypeOf);

var age=35;
console.log("Age: ",age);
var ageTypeof=typeof(age);
console.log("Type of Age: ",ageTypeof);

var address="Kharadi Pune";
console.log("Address: ",address);
var addressTypeof=typeof(address);
console.log("Type of address: ",addressTypeof);

var pinCode=410014;
console.log("Pincode: ",pinCode);
var pincodeTypeof=typeof(pinCode);
console.log("Type of pincode:",pincodeTypeof);

var gender="Female";
console.log("gender:",gender);
var genderTypeof=typeof(gender);
console.log("Type of gender: ",genderTypeof);

var isMarried=true;
console.log("Marital Status: ",isMarried);
var ismarriedTypeOf=typeof(isMarried);
console.log("type of isMarried:",ismarriedTypeOf);