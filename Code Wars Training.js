//Code Wars Training!! Date: 04/04/2022

// KATA 1

/* Instructions: Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

function squareSum(numbers) {
  let num = [];
  //Creates an empty array.
  for (let i = 0; i < numbers.length; i++) {
    num.push(Math.pow(numbers[i], 2));
    //Loop squares each element and pushes it into the num array.
  }
  return num.reduce((a, b) => a + b, 0);
  //Reduces the array to a single value, factors in empty arrays bc the comma 0.
}
console.log(squareSum([1, 2, 3])); //Shows 14

// PASSED ALL TESTS AND SOLVED! Best practice below:

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

// KATA 2

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  let petals = flower1 + flower2;
  if (petals % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

console.log(lovefunc(1, 2));

// PASSED ALL TESTS AND SOLVED! Best practice below:

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
console.log(lovefunc(1, 2));

// Kata 3

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}
console.log(paperwork(0, 4));

// PASSED ALL TESTS AND SOLVED! Best practice below:

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// Kata 4

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  if (str <= 2) {
    return;
  }
  return str.slice(1, -1);
}

console.log(removeChar("freddy"));

// PASSED ALL TESTS AND SOLVED! Best practice below:

function removeChar(str) {
  return str.slice(1, -1);
}

// Kata 5

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. Mind the input validation.

//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (array == null || array.length < 2) {
    return 0;
  } else {
    array.reduce((a, b) => a + b);
  }
}

function sumArray(array) {
  if (array == null || array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

// Passed! Alternate:

sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;

// Kata 6

//We need a function that can transform a number into a string. What ways of achieving this do you know?

function numberToString(num) {
  return num.toString();
}

console.log(numberToString(88));

//Passed! Alternate:

function numberToString(num) {
  return String(num);
}

// Kata 7

// We need a function that can transform a string into a number. What ways of achieving this do you know? Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

function stringToNumber(str) {
  return Number(str);
}

//Passed! Alternate:

var stringToNumber = function (str) {
  return parseInt(str);
};

// Kata 8

// You get an array of numbers, return the sum of all of the positives ones. Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  arr = arr.filter(function (x) {
    return x > -1;
  });
  return arr.reduce((a, b) => a + b, 0);
}

let a = [1, 2, 3];
console.log(positiveSum(a));

// Passed! Alternate:

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// Kata 9

//Your task is to create a function that does four basic mathematical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

// Passed! Alternate:

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Kata 10

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

function sumMix(x) {
  var x = x.map(Number);
  return x.reduce((a, b) => a + b);
}

// Passed! Alternate:

function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}

// Kata 11

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
  num = Array.from(String(num), Number);
  let squaredNum = [];

  for (let i = 0; i < num.length; i++) {
    squaredNum.push(Math.pow(num[i], 2));
  }

  return Number(squaredNum.join(""));
}

console.log(squareDigits(123));

// Passed! Alternate:

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

// Kata 12

//Given an integral number, determine if it's a square number:

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(25));

// Passed! Alternate:

// Kata 13

//This time no story, no theory. The examples below show you how to write function accum:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  // your code
}

// Kata 14 | TypeScript Practice

// export function even_or_odd(n: number): string {
//   if (n % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// Kata 15

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool == true) {
    return "Yes";
  } else {
    return "No";
  }
}

// Refactored:

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Kata 16

//Complete the solution so that it reverses the string passed into it.

function solution(str) {
  return str.split("").reverse().join("");
}

// Kata 17

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?"

function getGreeting(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(getGreeting("Freddy"));

// Kata 18

// Given an array of integers, return a new array with each value doubled.

function maps(x) {
  return x.forEach((i) => i * 2);
}

function maps(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(i * 2);
  }
  return newArr;
}

// Kata 19

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

// Kata 20

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

function toJadenCase(mess) {
  let str = mess.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return console.log(str.join(" "));
}

toJadenCase("hello what are you doing");

// ********* ********* ********* ********* ********* *********

// function squareSum(numbers) {
//   let num = [];
//   for (let i = 0; i < numbers.length; i++) {
//     num.push(Math.pow(numbers[i], 2));
//   }
//   return num.reduce((a, b) => a + b);
// }

function squareSum(numbers) {
  let num = [];
  for (let i = 0; i < numbers.length; i++) {
    num.push(Math.pow(numbers[i], 2));
  }
  return num.reduce((a, b) => a + b, 0);
}
console.log(squareSum([1, 2, 3]));

// --------- ------------- ---------------- ---------------------

function arrayMadness(a) {
  let squaredA = [];

  for (let i = 0; i < a.length; i++) {
    squaredA.push(Math.pow(a[i], 2));

    return squaredA;
  }
}

console.log(arrayMadness([4, 5, 6]));

// ==================================================================

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

///////////////////////////

// Random

const freddy = "boy";
const evin = "girl";
let maleOrFemale = "boy" ? "Male" : "Female";
console.log(maleOrFemale(freddy));

function genderCheck(name) {
  if (name == "boy") {
    return "Male";
  } else {
    return "Female";
  }
}

console.log(genderCheck(freddy));
console.log(genderCheck(evin));
