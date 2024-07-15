//FizzBuzz:
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//Palindrome Check:
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


//Find Largest Number in Array:
function findLargestNumber(arr) {
    return Math.max(...arr);
}


//Character Occurrence Counter:
function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}


//Find Longest Word in String:
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

//Calculate Factorial:
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}


//Convert Celsius to Fahrenheit:
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


//Find Missing Number:
function findMissingNumber(arr, n) {
    const expectedSum = n * (n + 1) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}
