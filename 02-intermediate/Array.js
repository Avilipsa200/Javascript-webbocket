/*1. Array is a object which can store similar type of data in a contigious memory location.
2. Array index start from 0.

*/ 
const myArr=[3,4,5,"gift",7,8,9] //Array initialize and declaring
console.log(myArr[3])//accesing the element
const a=new Array(1,3);// using new keyword
a[0]="gift"
a[4]=2
console.log(a[3])
console.log(a[4])
//-----------------ARRAY METHOD--------------------------------------
const arr=[1,2,3,4,5,6,7];
console.log(arr)
arr.push(8);
console.log(arr)
arr.pop();
console.log(arr);
arr.pop(2);
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.shift();
console.log(arr)
console.log(arr.includes(4))
console.log(arr.indexOf(4))
console.log(arr)
// join() method it basically works on converting a array to string
const demoarr=arr.join();
console.log(demoarr)
console.log(typeof demoarr)
const arr1=arr.slice(1,3);
console.log(arr1)
console.log("B",arr)
const arr2=arr.splice(1,3)
console.log(arr2)
const cars=["maruti","alto","wagnor"]
const supercars=["BMW","Audi","g-wagon"]
// cars.push(supercars);
// console.log(cars)
// cars.concat(supercars);
// console.log(cars)
// const result=cars.concat(supercars)
// console.log(result)
const newcars=[...cars,...supercars];
console.log(newcars)
const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr=anotherarr.flat(Infinity);
console.log(realarr)
//isArray() is a method to check wheather it is a array or not
//from()is a method in which we create that it automatically creates a array
console.log(Array.isArray("avi"))
const arr3=Array.from("avi")
console.log(arr3)
console.log(Array.isArray(arr3))