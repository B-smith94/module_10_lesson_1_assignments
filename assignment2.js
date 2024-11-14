/* Assignment 2: Exploring JavaScript Operators

Task 1: Declare variables to store 2 numeric values for performing arithmetic operations

Task 2: Assign sample numeric values to the variables declared in Task 1

Task 3: Perform arithmetic operations on your numeric values using various operators to display the results

Task 4: Explore assignment operators and update the value of variables

Task 5: Use comparison operators to compare the values of variables

Task 6: Apply logical operators to combine conditinos and display the results
*/

//Task 1

let x;
let y;

//Task 2

x = 10;
y = 5;

// Task 3
console.log("Sum:", x + y);
console.log("Difference:", x - y);
console.log("Product:", x * y);
console.log("Quotient:", x / y);

//Task 4
x += 3;
y -= 2;

console.log("Updated num1:", x);
console.log("Updated num2:", y);

//Task 5
console.log("Is num1 equal to num2?", x === y);
console.log("Is num1 greater than num2?", x > y);
console.log("Is num1 not equal to num2?", x != y);

//Task 6
let isPositive = x > 0 && y > 0;
let isEven = (x % 2 == 0) || (y % 2 == 0);
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);