/*def:- A javascript function is a block of code designed to perform particular task.
 - javascript function is executed when something invoked it (call it).
 */
function sayName(){
    console.log("G");
    console.log("I");
    console.log("F");
    console.log("T");
}
sayName();
//sayName-reference
//()-execution
function addTwoNumber(number1,number2){//parameter
    console.log(number1+number2)
}
addTwoNumber(3,4);
addTwoNumber(3,"a");//argument
function addTwoNumber(number1,number2){
    let result = number1+number2;
    return result;
}
const result=addTwoNumber(3,5);
console.log("Result:" +result)
// function loginUserMessage(username){
//     if(username ===undefined){
//         console.log("Please enter your username")
//     }
//     else{
//     return`${username} just logged in`
//     }
// }
// loginUserMessage();

// function message(username="rohit"){
//     if(!username)
//     {
//         console.log("Please enter your username")
//         return
//     }
//     return `${username} just loggedin`;
// }
// console.log(message())
// function calculatePrice( val1,val2,...num1){//...-rest operator
//     return num1;
// }
// console.log(calculatePrice(200,300,400,500,600,700));
const user={
    username:"gift",
    price:400
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
//shruthi.r@glider.ai-share resume
