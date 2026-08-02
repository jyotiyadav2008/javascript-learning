// operators:
// Arithematic

console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(10/5);
console.log(7%5);
// // Reminder
console.log(5**2)



// Assignment operator 

 let x =20;
 let y =10;
 x=x+y;
 console.log(x);
  

 // comparision operator

 let a =20;
 let b =10;
console.log (a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a===b);

 let z ="120";
let c=Number(z);
console.log(typeof z)   
console.log (typeof c)


 let p ="121ac";
 let q= Number(p);

 console.log(typeof q);

 // number-> string

 let n=10;
 let m = String(a);
 console.log ( typeof n);


  let k=true;
 console.log(Number(true));
 console.log(Number(false));

  console.log(Boolean(0));
  console.log(Boolean(""));
  console.log(Boolean(null));



  // computer science challenge

   let e =0.1;
   let f =0.2;
   let g = e+f;
   g=e+f;
    console.log(g);


    //1: null is loosely equal to undefined only


    console.log(null ==undefined);
    console.log (null===undefined);
    console.log(null==0);
    console.log(null=="");
    console.log(null==false);
    console.log(null==true);



    // >,<,>=,<= (null--> number)

    console.log(null>0);
    console.log(null>=0);
    console.log(null<0);
    console.log(null<=0);
    console.log(null>=0);
    console.log(10>"10")
    console.log("Rohit">"Mohit");
    console.log("Rohit">"mohit");
   // compare the ASCII value to find the result.

   
   console.log(10<true);
   
   // ek koi bhi type hai, usko agr mujhe compare karna hai  dusre kisi type se 
   // dono number me convert honge


   // for loop 
    for(let i =0; i<34; i++){
        console.log(i);
    }



    // while loop

    let w =0;
    while(w<3){
        console.log(w);
        w++;
    }


    // if- else condition
    let age =20;
    if(age<18){
    console.log("you can vote");
    }
    else{
        console.log(" you can not vote");
    }


 let marks =56;
 if(marks>40)
 {
    console.log("pass")
}
else if(marks>65){
    console.log("average")
}
else{
    console.log("good marks")
}


// logical operator


console.log(true &&true);
console.log(true &&false);
console.log(false &&false);
console.log(false &&true);

// if first value is false , it will return the first value itself
// if second  value is true , it will return the second value.


console.log(true ||true);
console.log(true ||false);
console.log(false ||false);
console.log(false ||true);

// if first value is true, it will return the first value itself
// if second  value is false, it will return the second value.


