/*
1.To be able to operate on variable,it is important to know something about the types of data is called datatypes.
2.JAvascript has 7 types of datatypes.
    a.number-2^53
    b.bigint-886479926
    c.string-"hhjnh"
    d.boolean-true/false
    e.null-0,{}
    f.undefind-not defind
    g.symbol-uniqueness

*/
let name="sushant";
let age=23;
let isPresent=true;
let id;
let num=225678999876554567865n
let email=null
console.log(typeof num)
console.log(typeof email)
console.log(typeof id)
console.log(typeof name);
console.log(typeof age);
console.log(typeof isPresent);
let idname=Symbol('123');
let anotherid=Symbol('123');
console.log(id===anotherid)
/*
Boolean tips
"gift"=true
" "=false 
1=true
0=false*/
let value=3
let nvalue=-value
console.log(nvalue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)