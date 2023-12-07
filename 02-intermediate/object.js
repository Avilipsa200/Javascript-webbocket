//Object are super important for grouping the data and functionalities.so we can do a lot of things in object of js.
//Object are constructed in key and value pair
mycars={
    BMW: "series 7",//BMW-properties ,series-value
    Audi:"Q7",
}
console.log(mycars)
const jsuser={
    name:"Biswa",
    email:"sushant@google.com",
    age:22,
    "full name":"Avijit mahapatra",
    location:"odisha",
    isloggedin:"false",
    lastloggedin:["monday","wednesday","Friday"]
}
console.log(jsuser)
console.log(jsuser.age)
console.log(jsuser["email"])
console.log(jsuser["full name"])
jsuser.email="avijit23@gmail.com"
 console.log(jsuser["email"])
// Object.freeze(jsuser)//freeze method fixed the value ,that cannot override again
// jsuser.email="gift@gmail.com"
// console.log(jsuser.email)

jsuser.greeting=function(){
    console.log("Hello");
}
console.log(jsuser.greeting());
jsuser.greetingtwo=function(){
    console.log(`Hello jsuser ${this.name}`);
}

    jsuser.greeting()
jsuser.greetingtwo()
const tuser={}
tuser.id="1234",
tuser.email="avi@gmail.com",
tuser.name="avi"
console.log(tuser)
console.log(tuser.id)
const regularuser={
    email:"somalin@gmail.com",
    fullname:{
        userfullname:{
            firstname:"somalin",
            lastname:"Ray"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)
console.log(regularuser.email)
console.log(regularuser.fullname)

const obj1={
    1:'a',
    2:'b'
} 
const obj2={
    3:'a',
    4:'b'
}
const obj3={
    5:'a',
    6:'b'
}
const obj4={obj1,obj2}
console.log(obj4)
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)
//OBJECT DESTRUCTURING
const course={
    coursename:"Last minute placement",
    price:9999,
    couseinstructor:"Rajeev"
}
const {couseinstructor:teacher}=course
console.log(teacher)
/* json:- javascript object notation
 that help for storing data in our local disk and we can manipulate these data also one place to another place.
 API:- Application programming interface.
 It us a mechanism that enables two software components to communicate with each other using a set of defination and protocols
 */