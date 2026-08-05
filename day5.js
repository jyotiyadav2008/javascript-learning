
// Array;
let marks1=100;
let marks2=50;
let marks3=70;
let marks4=80;
console.log(marks1,marks2,marks3,marks4);

let marks=[100,50,70,80];
console.log(marks);
console.log(marks.length);

let arr =[100,30,"Rohit",true];
console.log(arr);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[0]);
console.log(arr[2]);
console.log(typeof arr);
arr[1]=90;
console.log(arr);

// push :Insert element end
arr.push(90);
arr.push("strike");
console.log(arr);

// pop operation: Delete element from end

arr.pop();
console.log(arr);

// starting add kar sakta hu, delete the element at first place
arr.unshift(10);
arr.unshift(50);
arr.unshift(35);
console.log(arr);


// Delete kar sakta hu 

arr.shift();
console.log (arr);

// method to print the number

let arr1 =[10,30,50,90,11];
for(let i=0; i<arr1.length; i++){
    console.log(arr1);
}

for(let num of arr1){
    console.log(num);
}

// Object (non primitive): copy by refrence
// Primitive:copy by value


const arr3 = [10,30,50,90,11];
arr[2] =30;
console.log(arr3);


const arr4 = [10,30,50,90,11];
const arr5=arr4.slice(2,4);
console.log(arr5);
console.log(arr.splice(1,3));

 // add the number
const arr6=[10,30,50,90,11];
const arr7=["Rohit",11,true];
const arr8=arr6.concat(arr7);

console.log(arr8);


// spread operator

const arr9=[...arr6,...arr7];
console.log(arr9);


const names =["alice", "Rohit","Bob", "Mohit","Charlie"];
console.log(names.toString());
console.log(typeof names.toString());

// join(separator);
console.log(names.join(" "));
console.log(names.join("_"));

// simple searching:

console.log(names.indexOf("Bob"));
console.log(names.includes("Bob"));
console.log(names.includes("jyoti"));


names.sort();
names.reverse();
console.log(names);


const a = [101,90,80,32,91];
a.sort();
console.log(a);


const arr12 = [10,"Rohit","Mohit","true"];
    arr12.sort();
    console.log(arr12);


const arr13 = [10, 40, 31, 71, 5, 11];
    
arr13.sort((a, b) => a - b);

console.log(arr13);

    //-ve:pehle a ayega fr b ayega 
    // +ve: b ayega fr a ayega 

const arr14 = [10, 40, 31, 71, 5, 11];
    
arr14.sort((a, b) => b - a);

console.log(arr14);

// 2 dimension array
const arr15= [10,30,50,[40,90,11],80];
console.log(arr15[3]);
console.log(arr15[3][0]);
console.log(arr15[3][1]);
console.log(arr15[3][2]);
console.log(arr15[4]);

// 3 dimension array

const arr16 =[10,30,50,[40,90,[60,19,99],11],80];
console.log (arr16 [3][2][1]);


