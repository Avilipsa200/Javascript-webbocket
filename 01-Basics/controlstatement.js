/* It is a condition which controls the exception of the program
 conditional statement:-These statements are used for decission making a decission made by the condition
    - if statement
    -if-else statement
    -switch statement
    -ternary operator
Iterative statement:-This is a statement that iterate repeatedly untill condition met
    - for loop
    -do-while loop
    -while loop
*/
if(5>2){
    console.log("This condition is true");
}
//if-else
if(2>6){
    console.log("This condition is false");
}
else{
    console.log("This condition is true");
}
//switch
let num=3
switch(num)
{
    case 1:console.log("This is 1st statement"); break;
    case 2:console.log("This is 2nd statement");break;
    case 3:console.log("This is 3rd statement");break;
    default:console.log("This is nth statement");break;
}
//Ternary operator(?:)
let n=10;
let result=(n>=0?console.log("This is 1st statement"):console.log("This is 2nd statement"))
console.log(result)
//
