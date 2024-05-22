// QUESTION 1
// CREATE AN ARRAY NAME FRUITS THAT CONTAIN THE FOLLOWING STRING ELEMENT:"apple","banana","mango","orange"
var fruits = ["apple", "banana", "mango", "orange"];
// QUESTION 2
// DECLARE AN ARRAY NAMED NUMBERS THAT CAN CONTAIN ONLY NUMBER ELEMENT AND INITIALIZE WITH THE THE VALUES 10,20,30,AND 40
var numbers = [10, 20, 30, 40];
// QUESTION 3
// ACCESS THE THIRD ELEMENT OF THE FRUIT ARRAY AND ASSIGN IT OT A VARIABLE NAMED newFruit
var newFruit = fruits[2];
console.log(newFruit);
// QUESTION 4 
// CHANGE THE SECOND ELEMENT OF THE NUMBERS ARRAY TO 25
numbers[1] = 25;
console.log(numbers[1]);
// QUESTION 5
// ADD THE ELEMENT "GRAPS" TO THE END OF THE FRUITS ARRAY USING METHODS
fruits.push("graps");
console.log(fruits);
// QUESTION 6
// REMOVE THE LAST ELEMENT FROM THE FRUITS ARRAY USING THE METHOD AND ASSIGN IT TO A VARIABLE NAMED lastFruit
var lastFruit = fruits.pop();
console.log(lastFruit);
// QUESTION 7
// REMOVE THE FIRST ELEMENT FROM THE FRUITS ARRAY USING THE METNOD AND ASSIGN IT TO A VARIABLE NAMED firstFruit
var firstFruit = fruits.shift();
console.log(firstFruit);
// QUESTION 8
// ADD THE ELEMENT "kiwi" TO THE THE BIGGNING OF THE FRUITS ARRAY USING THE METHODS
fruits.unshift("kiwi");
console.log(fruits);
// QUESTION 9
// REMOVE 2 ELEMENTS FROM THE FRUITS ARRAY STARTING FROM INDEX 1 USING THE METHODS
fruits.splice(1, 2);
console.log(fruits);
// QUESTION 10
// INSERT THE ELEMENT "pineapple" AND "pear" AT INDEX 2 OF THE FRUITS ARRAY USING THE METHOD
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
// QUESTION 11
// CREATE A NEW ARRAY NAMED citrusFruits THAT CONTAIN THE FIRST TWO ELEMENT OF THE FRUITS ARRAY USING THE METHOD
var citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
// QUESTION 12
// CREATE A NEW ARRAY NAMED lastTwoFruits THAT CONTAIN LAST TWO ELEMENT OF THE FRUITS ARRAY USING THE METHOD
var lastTwoFruits = fruits.slice(2);
console.log(lastTwoFruits);
