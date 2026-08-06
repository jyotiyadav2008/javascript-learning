
// Object


const user = {
    name: "Jyoti",
    age: 20,
    emailId: "jyoti@gmail.com",
    amount: 3400,
    "home address": "Dwarka"
};

console.log(user);
console.log(typeof user);


// CRUD Operation


// Read
console.log(user.age);

// Update
user.aadhar = 1234;
user.amount = 5000;

console.log(user);

// Delete
delete user.emailId;

console.log(user);

// Access Property
console.log(user["name"]);
console.log(user.age);


// Copy Object (Reference)


const user2 = user;

user2.age = 90;

console.log(user);
console.log(user2);


// Object Method

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// For...in Loop


for (let key in user) {
    console.log(key, user[key]);
}


// Normal Property Access


const name = user.name;
const age = user.age;

console.log(name, age);


// Object Destructuring

const { name: userName, age: userAge } = user;

console.log(userName, userAge);

// Array Destructuring


const arr = [10, 20, 30, 40, 50];

const [first, second] = arr;

console.log(first, second);


const customer= {
    name: "Rohit",
    age: 20,
    emailId: "negi@gmail.com",
    amount: 3400,

    greeting: function () {
        console.log(`Strike is coming on 18 october ${this.name}`);
        return 20;
    }
};

const va = customer.greeting();
console.log(va);

const employee = {
    name: "Ankit",
    salary: 50000,
    city: "Delhi",

    details: function () {
        console.log(`${this.name} lives in ${this.city}`);
        return this.salary;
    }
};

const result = employee.details();
console.log(result);

const car = {
    brand: "BMW",
    model: "X5",

    showInfo: function () {
        console.log(`${this.brand} ${this.model}`);
        return "Done";
    }
};

const value = car.showInfo();
console.log(value);
