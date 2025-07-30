console.log("Jarvis initiate connection");


console.log("==== Homework 1 ====")
const grade = 72;

switch (true) {
case grade >= 90  &&  grade <= 100:
        console.log("A"); 
    break;
case grade >= 80  &&  grade <= 89:
        console.log("B"); 
    break; 
case grade >= 70  &&  grade <= 79:
        console.log("C"); 
    break; 
case grade >= 60  &&  grade <= 69:
        console.log("D"); 
    break; 
case grade >= 0  &&  grade <= 59:
        console.log("F"); 
default:
    console.log("Invaild Grade");
};