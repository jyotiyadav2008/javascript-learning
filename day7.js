
// Scope and High order function
console.log(" hello everyone today is day7 of my javascript journey");
// memory allocation
// a undefined
// b undefined
// addNumber =fnCode
// sumResult1=undefined
// sumResult2 =undefined


// Execution phase

console.log(a);
var a =10;
var b =20;
console.log(a);

function addNumber (num1,num2){
    var sum =num1+num2;
    return sum;
}
var sumResult1 = addNumber(a,b);
var sumResult2 =addNumber(4,5);
console.log(sumResult1,sumResult2);

// let const 
// memory allocation
// a= <uninitialised>(Temporal dead zone)
// b= <uninitialised>(Temporal dead zone)
// Execution


 let m =10;
 const n=20;
 const addNum=function(num1,num2){
    const sum =num1+num2;
    return sum;
 }

 //scope and closure in javascript 
 function outer() {
    let name = "Jyoti";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();


function outer() {
    let name = "Jyoti";

    function inner() {
        console.log(name);
    }

    return inner;
}

let result = outer();

result();

 function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let count1 = counter();

count1();
count1();
count1();

function person() {
    let money = 100;

    function checkMoney() {
        console.log(money);
    }

    return checkMoney;
}

let myMoney = person();

myMoney();

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let counter1 = counter();
let counter2 = counter();

counter1();
counter1();

counter2();
counter2();


function createUser(name) {

    return function () {
        console.log("Hello " + name);
    };

}

let user1 = createUser("Jyoti");
let user2 = createUser("Rahul");

user1();
user2();

 


