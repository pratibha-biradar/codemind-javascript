console.log("===Define a class for vehicle with === \n => 5 data members\n => constructor\n => method to log details object\n");
class Vehicle {
    //data members
    name;
    model;
    color;
    price;
    year;
    fuelType;

    //constructor
    constructor(name,model,color,price,year,fuelType){
        this.name=name;
        this.model=model;
        this.color=color;
        this.price=price;
        this.year=year;
        this.fuelType=fuelType;
    }
    //member function or methods
    details(){
        console.log("Hey, Here are the Vehicle Details :");
        
        console.log(` Name : ${this.name}, \n Model : ${this.model}, \n Color : ${this.color}, \n Price : ${this.price}, \n Year : ${this.year}, \n Fuel Type : ${this.fuelType} \n\n`);
        
    }
}
const CarVehicle = new Vehicle("ford","ECO sport","red", "13lakh", "2024", "diesel");
CarVehicle.details();

const latestCarVehicle = new Vehicle("Audi", "Q6 e-tron", "black", "1.1 crore", "2025", "Electric");
latestCarVehicle.details();

const royalEnfield = new Vehicle("Royal Enfield", "Classic 650 Twin", "Teal", "3.5 Lakh", "january 2025", "Petrol");
royalEnfield.details();

const latestScooty = new Vehicle("Honda Activa", "Activa ", "Decent Blue", "80 Thousand", "2025", "Petrol");
latestScooty.details();

const rangeRover = new Vehicle("Range Rover", "Velar", "whit-Black", "1.04 crore", "2025", "Mild Hybrid");
rangeRover.details();

console.log("===Define a class for College with === \n => 4 data members\n => constructor\n => method to log display object details\n");

class College {
       //data members
       name;
       location;
       establishedYear;
       facultyCount;
       hostelAvailability;

    //constructor
    constructor(name, location, establishedYear, facultyCount, hostelAvailability){
        this.name=name;
        this.location=location;
        this.establishedYear=establishedYear;
        this.facultyCount=facultyCount;
        this.hostelAvailability=hostelAvailability;
    }
    //member function
    display(){
        console.log("Hey, Here are the College details:");
        console.log(` Name: ${this.name} \n Location: ${this.location}, \n Established Year: ${this.establishedYear}, \n Faculty Count: ${this.facultyCount}, \n Hostel Availability: ${this.hostelAvailability}\n`); 
    }
}

const college1 = new College("C O E P", "Pune", 1854, 300, true);
college1.display();

const college2 = new College("P. E. S. Modern college of Engineering", "Shivaji Nagar (Pune)", 1999, 250, true);
college2.display();

const college3 = new College("Govt college of engineering", "Aurangabad", 1960, 180, true );
college3.display();

const college4 = new College("GRWPL", "Latur", 1994, 120, true);
college4.display();





