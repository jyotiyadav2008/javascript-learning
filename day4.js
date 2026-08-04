// string 
const str1="Rohit";
const str2='Rohit Negi';
const day =18;
const str3=`strike
 is coming on ${day}`;

console.log(str1,  str2);
console.log(str3);

const str=`Hello Coder Army`;
console.log(str.length);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[6]);

str[2] ="S";
console.log(str)

// this is premitive and immutable in nature

// Upper Case
// Lower Case
console.log(str.toUpperCase())
console.log(str.toLowerCase())


const str5=`Hello Coder Army`;
console.log(str5.indexOf('Cod'));



const str6=`Hello Coder Army Coder`;
console.log(str6.lastIndexOf('Cod'));
console.log(str6.includes('Cod'));
console.log(str6.slice(2,8));
console.log(str6.slice(3));
console.log(str6.slice(-4));
console.log(str6.slice(-5,-2));

// using substring 
console.log(str.substring(9,15));
// you can not markdown the negative index in substring;

const a="Rohit";
const b="Negi";
const c=a+" "+b;
console.log(c);

console.log(24+"Rohit");
console.log(24+"Rohit"+10);
console.log(24+30+"Rohit");

const str7=`Hello Coder Army Coder`;
console.log(str.replaceAll("ode",'iam'));

// this is return the new string 


// cleaning uo whitespac
// trimStart()/trimEnd():

const user =" Rohit ";
console.log(user)
console.log(user.trim());
// after using the trim its  remove the starting and ending space

// split(separator):

const names="Rohit,Mohit,Suraj,Rohan,Anjali";
console.log(names.split(" "))
console.log(names.split(" , "))

const now =new Date();
console.log(now.toString());
console.log(now.toLocaleString());
 
console.log (now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getUTCMonth());
console.log(now.getSeconds());
console.log(now.getTimezoneOffset());

// days:Mon-tue(1 based)
// Month:0 1

// num=now:
const num=new Date(2025,8,20,8,25,16,125);
console.log(num)





