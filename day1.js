
// how to print string in javascript
console.log("hello"); 
console.log (" Learning to the javascript ")

// using the let variable
let name="Jyoti";
console.log(name)
console.log(typeof(name));



// using the const variable
const college = "AKTU";
console.log(college);
const PI =3.14159;
console.log (PI);
const length =10;
const width =10;
const area =length *width;
console.log("Area =",area);


// using the Arithmetic operators
 
let a =10;
let b =5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
let x =12;
let y =7;
console.log (x%y);

let num=5;
console.log(num**2);


//Comparison operators

let m =10;
let n=20;
 console.log(m>n);
 console.log(m<n);
console.log(m==n);
console.log(m===n);

// if-else 
let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}



let p = 8;

if (p % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
 
let marks = 75;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// for loop 
for ( let i =1; i<=5; i++){
 console.log(i);
}

for( let n=10; n>=1; n--){
    console.log(n)
}


// sum of number

 let sum =0; 
 for( let i =1; i<=5; i++){
    sum+=i;
 }
 console.log(sum);
 

 // factorial

  let fact =1;
  for( let i =1; i<6; i++){
    fact*=i;
  }
  console.log(fact);

  // while loop

  let i =1; 
  while(i<=5){
    console.log(i);
    i++;
  }

  

  //functions

   function greet() {
    console.log("Hello Jyoti");
   }
   greet();
   

   function add (a,b) {
    return a+b;
   }
   console.log(add(5,8));
    
   function sub (j ,k) {
    return j-k;
   }
   console.log(sub(65,34));
   

 function square(r){
    return r *r;
 }
 console.log(square(7));



