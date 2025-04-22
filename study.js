let newArray = ['Love', 'Family', 'Children', 'Marriage'];
let arr = ['Joy'];
arr.push(newArray);
console.log(arr);
arr.push("Home");
console.log(arr);


let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays2 = [];
arrOfArrays2.push(someValues1, someValues2, someValues3);
console.log(arrOfArrays2);


// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays);

// // ACCESSING INNER ARRAY OF AN ARRAY 

// let value = arrOfArrays[0] [1];
// let value2 = arrOfArrays[1][2];
// console.log(value, value2);


// a = 0;
// if ( a < 100) {
//     console.log(a);
// }

// for ( let i = 0; i < 100; i++ ) {
//     if (i === 2){
//         i +=2;
//         continue;

//     }
//     console.log(++i);
    
// }
// let i = 1;

// while (i < 100) {
//     i++;
//     if ((i -1) % 2 === 0) {
//         continue;
//     }
//     console.log(i - 1);
// }

// for (let i = 0; i < 100; i++ ){
//     if ((i -1) % 2 === 0) {
//        // console.log(i -1);
//     }

//     console.log(++i);
// }

let i = 0;
function reCur (a) {
    console.log(a);
    if ( a < 100 ) {
        return reCur(++a);
     } if ((a - 1) % 2===0) {
        return reCur((a - 1))
     } else {
        a >=100;
        return a;
     }
     //console.log(reCur(++a));
}
reCur(1);

//&&

function reCur1 (a) {
    if (a < 100) {
        if ((a % 2) !==0) {
            console.log(a);
        }
        return reCur(a + 1)
    }
}

reCur1(2);


function countNumbers (a) {
    console.log('Current Number Value:', a)
    if (a < 10 ) {
        return countNumbers(++a);
    } else {
        a >=10;
        return a;
    }
}

countNumbers(10);

function printOddNumbers (a) {
    if (a >= 100) return;
    if (a % 2 !== 0 ) console.log(a);
    printOddNumbers(a + 1);
}

printOddNumbers(1);


// TRYING SOME CODE OUT 

let nasme =-0.0000000000000001;
console.log(typeof nasme);

let nasme2 = -1e308 * 10;
console.log(typeof nasme2);

// RANDOM CHAT GPT GENERATED CODE FOR MACHINE LEARNING 

// Sample data for the linear regression (X: input, Y: target)
const X = [1, 2, 3, 4, 5];  // Input values (features)
const Y = [1, 2, 1.3, 3.75, 2.25];  // Target values (output)

// Initialize parameters (weights)
let theta_0 = 0;  // Intercept
let theta_1 = 0;  // Slope
const alpha = 0.01;  // Learning rate
const iterations = 1000;  // Number of iterations
const m = X.length;  // Number of training examples

// Gradient Descent
for (let i = 0; i < iterations; i++) {
    // Calculate the predicted values (hypothesis)
    let predictions = X.map(x => theta_0 + theta_1 * x);

    // Calculate the cost (Mean Squared Error)
    let loss = (1 / (2 * m)) * predictions.reduce((sum, pred, idx) => sum + Math.pow(pred - Y[idx], 2), 0);
    
    // Calculate the gradients
    let grad_theta_0 = (1 / m) * predictions.reduce((sum, pred, idx) => sum + (pred - Y[idx]), 0);
    let grad_theta_1 = (1 / m) * predictions.reduce((sum, pred, idx) => sum + (pred - Y[idx]) * X[idx], 0);
    
    // Update parameters
    theta_0 -= alpha * grad_theta_0;
    theta_1 -= alpha * grad_theta_1;

    // Optionally, print the loss to monitor progress
    if (i % 100 === 0) {
        console.log(`Iteration ${i}: Loss ${loss}`);
    }
}

// Final learned parameters
console.log(`Learned model: y = ${theta_0} + ${theta_1}x`);



// SCRAMBLE WORD PROGRAM 


function scrambleWord1(originalWord) {
    let scrambledWord = '';
    let remainingWord = originalWord; // Copy the original word to manipulate

    for (let currentIndex = 0; currentIndex < originalWord.length; currentIndex++) {
        let randomIndex = Math.floor(Math.random() * remainingWord.length);
        let randomCharacter = remainingWord.charAt(randomIndex); // Select a random character
        scrambledWord += randomCharacter; // Add the character to the scrambled result
        // Remove the random character using substring
        remainingWord = remainingWord.substring(0, randomIndex) + remainingWord.substring(randomIndex + 1);
    }

    return scrambledWord;
}

let wordToScramble1 = 'Tamaratarelayefa';
console.log(scrambleWord1(wordToScramble1));





function scrambleWord(originalWord) {
    let scrambledWord = '';
    let remainingWord = originalWord; // Copy the original word to manipulate

    for (let currentIndex = 0; currentIndex < originalWord.length; currentIndex++) {
        let randomIndex = Math.floor(Math.random() * remainingWord.length);
        let randomCharacter = remainingWord.charAt(randomIndex); // Select a random character
        scrambledWord += randomCharacter; // Add the character to the scrambled result
        // Log the current state
        console.log(`Temp String (Scrambled): ${scrambledWord}, Remaining String: ${remainingWord}`);
        // Remove the random character using substring
        remainingWord = remainingWord.substring(0, randomIndex) + remainingWord.substring(randomIndex + 1);
    }

    return scrambledWord;
}

let wordToScramble = 'Tamaratarelayefa';
console.log(`Final Scrambled Word: ${scrambleWord(wordToScramble)}`);


const timeoutId = setTimeout(function() {
    console.log("This won't be logged");
  }, 2000);
  //console.log(timeoutId);
//clearTimeout(timeoutId); // Cancels the timeout


// VISUAL STUDIO CODE USES SOMETHING ELSE FOR ITS PROMPT 

// let numbers;
// do {
//     numbers = prompt('Please enter a enter a number between 0 and 100: ')
// } while (!(numbers >= 0 && numbers< 100));



let arrn = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < arrn.length; i++) {
    let arri = arrn[i];
    for (let x = 0; x < arri.length; x++) {
        console.log(arri[x]);
    }
    console.log(arri);
}

let up = console.log('I love');
//console.log(up);

function addNums(a, b) {
    return a + b;
}
const val1 = 5;
const val2 = 6;

console.log(addNums(val1, val2));


// function randDescription() {
//     let askSome = prompt('Enter a number for a random wish?: ')
//     let arrWords = ['Hope', 'Love', 'Joy', 'Happiness', 'Success', 'Rejoice'];
//     let randomNum = Math.floor(Math.random() *arrWords.length);
//     console.log('Your wish:', arrWords[randomNum]);

// }
// randDescription();

function evenNum(a) {
    if (a % 2 === 0) {
        //console.log('Even Number');
        return 'Even Number';
    } else {
        //console.log('Odd Number');
        return 'Odd Number';
    }
    //return 'A Function was called.';
}
evenNum(5); // THIS WOULDN'T GET CALLED THE FUNCTION HAS THE 'RETURN' IT NEEDS TO BE SAVED IN A VARIABLE FIRST TO SEE IT'S OUTPUT.

let saveFunc = evenNum(3);
console.log(saveFunc);