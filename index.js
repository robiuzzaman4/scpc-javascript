// ---------------------------------- //
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" 
// Example Output: "dlrow olleh"

const reverseStr = (str) => {
    // initial reversed string
    let reversed = "";

    //loop over the input string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    // return result
    return reversed;
}

// show result on console
console.log("Problem-1", reverseStr("ruhan"));




// ---------------------------------- //
// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] 
// Example Output: 19

const findPositive = (numArr) => {
    // initial positiveNumArr value will be empty array
    let positiveNumArr = [];

    // filter positive number and push to positiveNumArr[]
    numArr.filter((num) => num >= 0 ? positiveNumArr.push(num) : "Please Provide Positive Value In Array");

    // calculate sum
    const sum = positiveNumArr.reduce((acc, current) => acc + current, 0);

    // return sum
    return sum;
}

// show result on console
console.log("Problem-2", findPositive([2, -5, 10, -3, 7]));




// ---------------------------------- //
// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] 
// Example Output: 3

const findMostFrequentElement = (arr) => {
    // declare an empty object for letter use
    let frequncy = {};

    // loop over array and set frequncy object's key, value
    for (let i of arr) {
        frequncy[i] = (frequncy[i] || 0) + 1;
    }

    let mostFrequentElement = null;
    let frequncyCount = 0;

    // loop over the frequncy object and find most frequent element
    for (let i in frequncy) {

        const element = frequncy[i];

        if (element > frequncyCount) {
            frequncyCount = element;
            mostFrequentElement = i;
        }
    }

    // return result
    return mostFrequentElement;
}
// show result on console
console.log("Problem-3", findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));




// ---------------------------------- //
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) 
//  Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const findTwoIndecats = (arr, targetValue) => {

    // initial two num
    let numOne = 0;
    let numTwo = arr.length - 1;

    // loop over the arr until numOne < numTwo
    while (numOne < numTwo) {
        // calculate total
        const total = arr[numOne] + arr[numTwo];

        // checking condition
        if (total === targetValue) {
            return [arr[numOne], arr[numTwo]];
        } else if (total < targetValue) {
            numOne++;
        } else {
            numTwo--;
        }
    }

    // return empty array if not match any criteriya
    return [];

}

// show resutl on console
console.log("Problem-4", findTwoIndecats([1, 3, 6, 8, 11, 15], 9));




// ---------------------------------- //
// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (numOne, numTwo, operator) => {
    // initial result value will be null
    let result = null;

    // check condition based on operator
    if (operator === "+") {
        result = numOne + numTwo;
    } else if (operator === "-") {
        result = numOne - numTwo;
    } else if (operator === "*") {
        result = numOne * numTwo;
    } else if (operator === "/") {
        result = numOne / numTwo;
    } else {
        result = `Invalid operator! Please give correct operator like this - "+" or "-" or "*" or "/"`
    }

    // return result
    return result;
}

// show result on console
console.log("Problem-5", calculator(5, 10, "+"));




// ---------------------------------- //
// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length = 8) => {
    // password characters
    const characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;

    // initial password value will be empty string
    let password = "";

    // run loop based on length
    for (let i = 0; i < length; i++) {
        const randomStr = Math.floor(Math.random() * characters.length);
        password += characters[randomStr]
    }

    // return result
    return password.length;
}

// show result on console
console.log("Problem-6", generateRandomPassword(16));




// ---------------------------------- //
// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.




// ---------------------------------- //
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallestNumber = (arr) => {
    // sort array
    const sortedArr = arr.sort((a, b) => a - b);

    // find second smallest
    const secondSmallest = sortedArr[1];
    
    // return result
    return secondSmallest;
}

// show result on console
console.log("Problem-8", findSecondSmallestNumber([10, 5, 4, 30]));


