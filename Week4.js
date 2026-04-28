//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE

function convertTemp(cTemp) {
    return (`Q1 convertTemp: ${cTemp}°C = ${cTemp * 9 / 5 + 32}°F`);
}

console.log(convertTemp(0));
console.log(convertTemp(100));


// function convertTemp (cTemp){
//     return  cTemp * 180/100 +32;
// }

// let celsiusTemp = 0;
// console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));

// let celsiusTemp = 100;
// console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));


// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.

// PUT YOUR CODE HERE

function reverseString(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

let inputString = "Elias";
console.log("Q2 reverseString: ", inputString, reverseString(inputString));

inputString = "Sepulveda";
console.log("Q2 reverseString: ", inputString, reverseString(inputString));


// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

function tipCalculator(billTotal, tipPercentage) {
    return billTotal + " " + tipPercentage + " " + billTotal * (tipPercentage + 1)
}

console.log("Q3 tipCalculator: ", tipCalculator(20, .20));

console.log("Q3 tipCalculator: ", tipCalculator(50, .20));

// Don't forget your console.logs!


// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE

const multiplyThese = (num1, num2) => num1 * num2;

let num1 = 10;
let num2 = 10;

console.log("Q4 multiplyThese: ", num1, num2, multiplyThese(num1, num2));


// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

function getAverage(param1, param2) {
    // parseFloat(param1);
    // parseFloat(param2);
    return param1 + " " + param2 + " " + ((param1 + param2) / 2)
}

console.log("Q5 getAverage: ", getAverage(5, 6));

// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers.
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE

function isPrime(num) {
    if (num === 0 || num === 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 1;
console.log("Q6 isPrime: ", number, isPrime(number));

number = 0;
console.log("Q6 isPrime: ", number, isPrime(number));

number = 4;
console.log("Q6 isPrime: ", number, isPrime(number));

number = 12;
console.log("Q6 isPrime: ", number, isPrime(number));

number = 7;
console.log("Q6 isPrime: ", number, isPrime(number));

number = 5;
console.log("Q6 isPrime: ", number, isPrime(number));

number = 13;
console.log("Q6 isPrime: ", number, isPrime(number));

// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE

function getPrimesUpTo(integer) {
    let primes = [];
    for (let i = 2; i <= integer; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

let number2 = 14;

console.log("Q7 getPrimesUpTo: ", number2, getPrimesUpTo(number2));

// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.

// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.

// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE

let scores = [90, 80, 85];

function calculateAverage(arr) {
    let sum = 0;
    let validNumbers = 0;
    if (arr.length === 0) {
        return `This is an empty array.`
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 100 && arr[i] >= 0) {
            sum += arr[i];
            validNumbers++;
        }
    }
    if (validNumbers === 0) {
        return `Invalid inputs.`
    }
    let average = sum / validNumbers;
    return average;
}

console.log("Q8 calculateAverage: ", calculateAverage(scores));

scores = [];
console.log("Q8 empty array: ", calculateAverage(scores));

scores = [190, -80, -85]
console.log("Q8 invalid range: ", calculateAverage(scores));

scores = [190, 80, 85]
console.log("Q8 2 valid numbers: ", calculateAverage(scores));

// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE

function getLetterGrade(average) {
    if (average > 100) {
        return `A+`
    } else if (average >= 90 && average <= 100) {
        return `A`
    } else if (average >= 80) {
        return `B`
    } else if (average >= 70) {
        return `C`
    } else if (average >= 60) {
        return `D`
    } else {
        return `F`
    }
}

console.log("Q9 getLetterGrade: ", getLetterGrade(95));
console.log("Q9 getLetterGrade: ", getLetterGrade(85));
console.log("Q9 getLetterGrade: ", getLetterGrade(75));
console.log("Q9 getLetterGrade: ", getLetterGrade(65));
console.log("Q9 getLetterGrade: ", getLetterGrade(55));
console.log("Q9 getLetterGrade: ", getLetterGrade(105));
console.log("Q9 getLetterGrade: ", getLetterGrade(0));

// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise. Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE

function passed(letterGrade) {
    if (letterGrade === `A` || letterGrade === `B` || letterGrade === `C`) {
        return true;
    } else if (letterGrade === `D` || letterGrade === `F`) {
        return false;
    } else {
        return false
    }
}

console.log("Q10 passed('A'): ", passed('A'));
console.log("Q10 passed('B'): ", passed('B'));
console.log("Q10 passed('C'): ", passed('C'));
console.log("Q10 falled('D'): ", passed('D'));
console.log("Q10 failed('F'): ", passed('F'));
console.log("Q10 failed('E'): ", passed('E'));

// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE

function printClassResult(className, student, scores) {

    let average = calculateAverage(scores);
    let letterGrade = getLetterGrade(average);
    let passedBoolen = passed(letterGrade);
    let pass;
    if (passedBoolen) {
        pass = `yes`
    } else {
        pass = `no`
    }
    return `${className} - Student: ${student}, Average: ${average}, Grade: ${letterGrade}, Passed: ${pass}`
}

console.log("Q11: ", printClassResult("History 101", "Jane Doe", [60, 70, 85, 87]))
console.log("Q11: ", printClassResult("History 101", "Jane Doe", [60, 0, 85, 87]))

// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE

function buttonPushed() {
    console.log("Q12, Q13: The button was pushed!")
}

buttonPushed();

// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE

function simulateButtonPush(param) {
    param();
}

simulateButtonPush(buttonPushed)