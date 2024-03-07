// VARIABLE CASE SENSITIVES
//camelCase               
var userName = "wajiha";
var lastName = "khan";
var fulName = "".concat(userName, " ").concat(lastName); //template literals  
//NUMBER 
console.log(fulName);
var userAge = 23;
//BOOLEN
var itsRignt = true;
console.log(userAge);
//snake_case
var brand_name = "ICONIC";
var brand_name2 = "ALKRAM";
brand_name2 = "kHADI";
console.log(brand_name + " " + brand_name2); ///Concatenation
var user_age = 22; //NUMBER
console.log(user_age);
var its_wrong = false; //BOOLEN
console.log(its_wrong);
//PascalCase
var StudentName = "Wajiha";
var FatherName = "Salman";
var NameOfStudent = "".concat(StudentName, " ").concat(FatherName);
console.log(NameOfStudent);
var XyzNumber = 25; ///NUMBER
var AbcNumber = 2;
console.log(XyzNumber * AbcNumber);
console.log(XyzNumber + -AbcNumber);
//ARRAY STRING
//EXAMPLE#1
var stationaryList = ["Pen", "Books", "Paper", "ink", "Register", "Maker"];
console.log(stationaryList[2]);
//EXMPLE#2
var countryName = ["Pakistan", "Singapor", "Malisha", "Turkiye", "America"];
console.log(countryName[3], " &", countryName[2]);
//ARRAY NUMBER
var student_Id = [12, 13, 5, 23, 37, 27, 20];
student_Id = [12, 13, 5, 23, 37, 27, 20, 44];
console.log(student_Id[0], student_Id[5], student_Id[7]);
//ARRAY BOOLEN
var isRaning = [true];
isRaning = [true, false];
console.log(isRaning);
//List Of Student Name and Id
var enrolledStudent = ["Ali", "Muhammad", "Noman", "bilal", "Bushra", "Aqsa", "Hazal", "Kiran"];
var LastName = ["Ahmed", "Waris", "Lodi", "Abbas", "Khan", "khalid", "Khan", "Ali"];
var enrolled_id = [10, 12, 22, 33, 44, 55, 66, 77];
console.log("LIST OF STUDENTS");
console.log("ID:", enrolled_id[0], "Name:", enrolledStudent[0], LastName[0]);
console.log("ID:", enrolled_id[1], "Name:", enrolledStudent[1], LastName[1]);
console.log("ID:", enrolled_id[2], "Name:", enrolledStudent[2], LastName[2]);
console.log("ID:", enrolled_id[3], "Name:", enrolledStudent[3], LastName[3]);
console.log("ID:", enrolled_id[4], "Name:", enrolledStudent[3], LastName[4]);
console.log("ID:", enrolled_id[5], "Name:", enrolledStudent[5], LastName[5]);
console.log("ID:", enrolled_id[6], "Name:", enrolledStudent[6], LastName[6]);
console.log("ID:", enrolled_id[7], "Name:", enrolledStudent[7], LastName[7]);
