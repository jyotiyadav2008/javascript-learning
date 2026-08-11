// forEach()
const numbers1 = [10, 20, 30, 40, 50];

numbers1.forEach(function (number) {
    console.log(number);
});

//forEach() — numbers ka sum

const numbers2 = [10, 20, 30, 40, 50];

let total2 = 0;

numbers2.forEach(function (number) {
    total2 = total2 + number;
});

console.log(total2);

// filter() — even numbers

const numbers3 = [10, 15, 20, 25, 30, 35];

const evenNumbers3 = numbers3.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers3);

 //filter() — greater than 30

 const numbers4 = [10, 20, 30, 40, 50];

const greaterNumbers4 = numbers4.filter(function (number) {
    return number > 30;
});

console.log(greaterNumbers4);

// Object + forEach() — name aur price print

const products5 = [
    { name: "Laptop", price: 800 },
    { name: "Mobile", price: 500 },
    { name: "Headphones", price: 50 }
];

products5.forEach(function (product) {
    console.log(product.name);
    console.log(product.price);
});



//Object + filter() — price 50 se zyada
const products6 = [
    { name: "Laptop", price: 800 },
    { name: "Mobile", price: 500 },
    { name: "Headphones", price: 50 },
    { name: "Mouse", price: 30 }
];

const expensiveProducts6 = products6.filter(function (product) {
    return product.price > 50;
});

console.log(expensiveProducts6);


 //Grocery products

 const products7 = [
    { name: "Apple", category: "Groceries", price: 5 },
    { name: "Bread", category: "Groceries", price: 8 },
    { name: "T-Shirt", category: "Clothing", price: 25 },
    { name: "Laptop", category: "Electronics", price: 800 }
];

const groceryProducts7 = products7.filter(function (product) {
    return product.category === "Groceries";
});

console.log(groceryProducts7);


//Grocery + price


const products8 = [
    { name: "Apple", category: "Groceries", price: 5 },
    { name: "Bread", category: "Groceries", price: 8 },
    { name: "Milk", category: "Groceries", price: 60 },
    { name: "Laptop", category: "Electronics", price: 800 }
];

const costlyGrocery8 = products8.filter(function (product) {
    return product.category === "Groceries" && product.price > 10;
});

console.log(costlyGrocery8);