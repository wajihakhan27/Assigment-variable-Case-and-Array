// VARIABLE CASE SENSITIVES

//camelCase               
 let userName:string="wajiha"
 let lastName:string="khan"
 let fulName=  `${userName} ${lastName}`   //template literals  
 //NUMBER 
 console.log(fulName);
 let userAge=23             
//BOOLEN
 let itsRignt=true         
console.log(userAge)

 //snake_case

 let brand_name:string="ICONIC"
 let brand_name2:string="ALKRAM"
 brand_name2= "kHADI"
 console.log(brand_name+ " " +brand_name2);          ///Concatenation

let user_age:number=22          //NUMBER
console.log(user_age);

let its_wrong:boolean=false       //BOOLEN
console.log(its_wrong);

 //PascalCase
 let StudentName:string="Wajiha"
 let FatherName:string= "Salman"
 let NameOfStudent= `${StudentName} ${FatherName}`;
 console.log(NameOfStudent);

 let XyzNumber:number=25         ///NUMBER
 let AbcNumber:number=2
 console.log(XyzNumber*AbcNumber);
 console.log(XyzNumber+-AbcNumber);

 //ARRAY STRING
//EXAMPLE#1
 let stationaryList:string[]=["Pen", "Books","Paper","ink","Register","Maker"]
 console.log(stationaryList[2]);
 //EXMPLE#2
 let countryName:string[]=["Pakistan","Singapor","Malisha","Turkiye","America"]
 console.log(countryName[3]," &" ,countryName[2]);

 //ARRAY NUMBER
 let student_Id:number[]=[12,13,5,23,37,27,20]
 student_Id=[12,13,5,23,37,27,20,44]
 console.log(student_Id[0],student_Id[5],student_Id[7]);
 
 //ARRAY BOOLEN

let isRaning:Boolean[]=[true]
isRaning=[true , false]
console.log(isRaning);

//List Of Student Name and Id

let enrolledStudent:string[]=["Ali","Muhammad","Noman","bilal","Bushra", "Aqsa","Hazal","Kiran"]
let LastName:string[]=["Ahmed","Waris","Lodi","Abbas","Khan","khalid","Khan","Ali"]
let enrolled_id:number[]=[10,12,22,33,44,55,66,77]
console.log("LIST OF STUDENTS");
console.log("ID:",enrolled_id[0],"Name:",enrolledStudent[0],LastName[0] );
console.log("ID:",enrolled_id[1],"Name:",enrolledStudent[1],LastName[1] );
console.log("ID:",enrolled_id[2],"Name:",enrolledStudent[2],LastName[2] );
console.log("ID:",enrolled_id[3],"Name:",enrolledStudent[3],LastName[3] );
console.log("ID:",enrolled_id[4],"Name:",enrolledStudent[3],LastName[4] );
console.log("ID:",enrolled_id[5],"Name:",enrolledStudent[5],LastName[5] );
console.log("ID:",enrolled_id[6],"Name:",enrolledStudent[6],LastName[6] );
console.log("ID:",enrolled_id[7],"Name:",enrolledStudent[7],LastName[7] );