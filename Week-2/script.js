// Question 1: Declare variables and check if age is 18 or more
let age = 25;
let isAdult = age >= 18;

// Question 2: Perform arithmetic operations
let x = 10, y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

// Question 3: Check if a number is even or odd
let n = 7;  
let isEven = (n % 2 === 0) ? "Even" : "Odd";

// Question 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

// Question 5: Function to return the square of a number
function square(num) {
    return num * num;
}


console.log({ isAdult, addition, multiplication, modulus, isEven, numbers, squareOf4: square(4) });
