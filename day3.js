//  number/string/ number

console.log("I am very happy today is day 3 in my javascript journey");
let a=10;
let b=345.6821;
let c= b.toFixed(1);
console.log(b.toPrecision(5))
console.log(a);
console.log(b);
console.log(b.toFixed(2));
console.log(b.toString())


let p = new Number(20);
console.log(p);
console.log(typeof p)

let r =20;
console.log(typeof r);


let obj1={
 name:"Rohit"
}
let obj2={
name:"Rohit"
}
console.log(obj1==obj2);



// non primitive : compare on the basic of refrence.
// primitive: copy by value.


let s=10;
let t=s;
console.log(s==t);
// compare on the basic of data.


// mnow using math 
console.log (Math.abs(-4));
console.log( Math.PI);
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.SQRT1_2);
console.log(Math.cos(60));
console.log(Math.ceil(2.4));
console.log(Math.floor(3.4));
console.log(Math.max(29,34,555,66));
console.log(Math.exp(34));
console.log(Math.random());


// (0,1): it will generate value between 0 and 1. 
// where 0 is included and the 1 is excluded


// the number is (1 to 10) then.
 console.log(Math.floor(Math.random()*10+1));
 console.log(Math.floor(Math.random()*6+1));


 //(15-25)

 console.log(Math.floor(Math.random()*11)+15);

 // formula:
 //Math.floor(Math.random() * (max - min + 1)) + min


