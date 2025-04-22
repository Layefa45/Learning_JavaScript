////alert("Hello");
////prompt("Enter a keyword:");
//
//// JAVASCRIPT MULTIPLE VALUES
//
//// WRONG WAY TO WRITE ARRAYS
//
//arr1 = new Array("purple", "green", "yellow");
//
//// RIGHT WAY TO WRITE ARRAYS
//
//arr2 = ["black", "orange", "pink"];
//
//console.log(arr1, arr2);
//
//// THE FIRST WAY (wrong method) CAN DO UNEXPECTED THINGS
//
//arr3 = new Array(10);
//arr4 = [10];
//
//console.log(arr3);
//
//console.log(arr4);
//
//// ARRAYS CAN CONTAINANY DATA TYPE
//
//let arr = ["Hi There", 5, true];
//console.log(typeof arr[0]);
//
//console.log(typeof arr[1]);
//
//console.log(typeof arr[2]);
//
//// WHAT HAPPENS WHEN 'CONST' IS USED TO CREATE AN ARRAY? YOU CAN CHANGE THE VALUES OF A CONSTANT ARRAY BUT YOU CANNOT CHANGE ARRAY ITSELF
//
//const arr10 = ["chosen"];
//arr10[0] = "generation";
//
//console.log(arr10);
//
////arr10 = ["now overwriting"];
//
//// ACCESSING ELEMENTS
//
//cars = ["Toyota", "Renault", "Volkswagen"];
//console.log(cars[0]);
//
//console.log(cars[1]);
//
//// CALLING FOR NON-EXISTENT INDEX POSITIONS IN ARRAY RESULTS IN 'UNDEFINED' AS OUTPUT
//
//console.log(cars[3]);
//console.log(cars[-1]);
//
//// OVERWRITING ELEMENTS, ELEMENTS IN AN ARRAY CAN BE OVERWRITTEN BY ASSIGNING THE INDEX TO ANOTHER VALUE
//
//cars1 = ["Toyota", "Renault", "Volkswagen"];
//cars1[0] = "Tesla";
//
//console.log(cars1);
//
//// ASSIGNING VALUES TO OVERWRITE ELEMENTS THAT DO NOT EXIST
//
//cars1[3] = "Kia";
//cars1[-1] = "Fiat";
//
//console.log(cars1);
//console.log(cars1[3]);
//console.log(cars1[-1]);
//
//// BUILT-IN LENGTH PROPERTY
//
//colors = ["black", "orange", "pink"];
//booleans = [true, false, false, true];
//emptyArray = [];
//
//console.log("Length of colors:", colors.length);
//console.log("Length of colors: ", booleans.length);
//console.log("Length of colors: ", emptyArray.length);
//
//let addresses = [
//   {
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida"
//   },
//
//   {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas"
//   }
//];
//
//let streetName = addresses[1].zipcode;
////alert(streetName);
//
//// PRACTICE EXERCISE 3.5
//
//let people = {
//   friends: [
//       {
//           firstName: "Rita",
//           lastName: "Jacobs",
//           identityNumber: 90909
//       },
//
//       {
//           firstName: "Rukevwe",
//           lastName: "Matheus",
//           identityNumber: 5676
//       },
//
//       {
//           firstName: "Matthew",
//           lastName: "Michaels",
//           identityNumber: 789898
//       }
//   ]
//};
//
//console.log(people);
//
//let friendList = people.friends;
//
//console.log(friendList);
//
//friendList = people.friends[0];
//console.log(friendList);
//
//friendList = people.friends[1];
//console.log(friendList);
//
//friendList = people.friends[2];
//console.log(friendList);
//
//friendList = people.friends[0].firstName;
//console.log(friendList);
//
//friendList = people.friends[1].firstName;
//console.log(friendList);
//
//friendList = people.friends[2].lastName;
//console.log(friendList);
//
////// PRACTICE EXERCISE 3.5 RIGHT WAY
//
//let people1 = { friend: [] };
//
//let friend1 = { firstName: "Maxwell", lastName: "Moses", id: 7689 };
//
//let friend2 = { firstName: "Marky", lastName: "Ben", id: 7699 };
//
//let friend3 = { firstName: "Linda", lastName: "John", id: 6754 };
//
//people1.friend.push(friend1, friend2, friend3);
//
//console.log(people1.friend);
//
//// CHAPTER PROJECT: COMPANY PROJECT CATALOGUE
//
//const inventory = [];
//
//const item1 = { name: "tablet", model: "ipad", cost: 650, qty: 1 };
//
//const item2 = { name: "phone", model: "imac", cost: 500, qty: 11 };
//
//const item3 = { name: "computer", model: "ipad", cost: 1000, qty: 3 };
//
//inventory.push(item1, item2, item3);
//console.log(inventory);
//
//let accElement = inventory[2].qty;
//console.log(accElement);
//
//let variable = "color";
//item3[variable] = "pink";
//console.log(item3);
//
//console.log(variable);
//
//// CHAPTER THREE SELF QUIZ
//
//const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
//myArr3.sort();
//myArr3.length = 0;
//console.log(myArr3[0]);
//
//console.log(myArr3);
//
//// JAVASCRIPT CODE
//
//let age = 10;
//let cost = 0;
//let message;
//
//if (age < 3) {
//   cost = 0;
//   message = "Access is free for those under three";
//} else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount the fee is 5 dollars";
//} else if (age > 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars";
//} else {
//   cost = 7;
//   message = "A ticket is 7 dollars";
//}
//
//console.log(message);
//console.log("Your Total cost ", cost);
//console.log("Your Total cost " + cost);
//
//// PRACTICE EXERCISE 4.2
//
////let ages = Prompt("Enter Your Age: ");
////ages = Number(ages);
//
//let messages;
//
//// if (ages >= 21) {
////    messages = "You can enter and allowed to purchase alcohol";
////    //console.log(messages);
//// } else if (ages >= 19) {
////    messages = "Entry allowed but not allowed to purchase alcohol";
////    //console.log(messages);
//// } else {
////    messages = "Entry Denied!!";
////    //console.log(messages);
//// }
//
//// console.log(messages);
//
//// PRACTICE EXERCISE 4.3
//
//let iD = true;
//
//let messaged = iD != true ? console.log("You can come in") : console.log("Denied ");
//
////console.log(messaged);
//
//// PRACTICE EXERCISE 4.4
//
//// MAGIC 8 BALL RANDOM ANSWER GENERATOR
//
//let randomNum = Math.floor(Math.random() * 5);
//
//let userInput = prompt("Enter a question you want a answer for prediction");
//
//let response;
//
//let save = [];
//
//switch (randomNum) {
//   case 0:
//       response = "Without continous efforts you are sure to give up and fail if you don't persist";
//       break;
//   case 1:
//       response = "Continous failure doesn't mean you would'nt succeed, Fighting!!";
//       break;
//   case 2:
//       response = "Getting this response means you still want to fight and aim for a better future no matter the failure, Goodluck girl";
//       break;
//   case 3:
//       response = "Don't go back and don't give up and success is just along the corner, you are almost there!!";
//       break;
//   case 4:
//       response = "You've made it, congratulations!!! But it doesn't end here, plan and surely everything will work out";
//       break;
//   case 5:
//       response = "Okay girl, You are awesome, getting this would mean you get what you want, I LOVE YOU TARE!!!!";
//       break;
//}
//
//let output = "This this the question you asked, " + " '" + userInput + "'?, "  + response ;
//
//console.log(output);
//
//save.push(response);
//
//
//console.log( "'" + userInput + "'?, "+ " " + response);
//
//console.log(save);
//
////
////switch (prize) {
////   case 0:
////   case 3:
////       response2 = "Two Baskets of rice";
////       break;
////
////   case 1:
////   case 2:
////       response2 = 'Two old hens';
////       break;
////
////   case 4:
////   case 5:
////   case 6:
////   case 7:
//   //case 8:
//   //    response2 = "Two bags of rice";
//   //    response2 += " and $100";
//   //    break;
//   //
//   //case 9:
//   //case 10:
//   //    response2 = "$10,000";
//   //    break;
//   //
//   //default:
//   //    response2 = "YOU GOT NOTHING!!";
//   //    break;
//
////}
////
////
////console.log(finalOutput + response2);
//
//
//// CHAPTER PROJECT
//
//let choices = ["Rock", "Paper", "Scissors"];
//
//let playerRandom = Math.floor(Math.random() *3);
//let computerRandom = Math.floor(Math.random() *3);
//
//let responses = "The player chose " + choices[playerRandom] + ", The computer chose " + choices[computerRandom];
//
//if (playerRandom === computerRandom) {
//   responses += " \nThis is a tie";
//
//} else if (playerRandom > computerRandom) {
//   if (computerRandom == 0 && playerRandom == 2 ) {
//       responses += "\nComputer Wins!!";
//   } else {
//       responses += "\nThe Player Wins";
//   }
//} else {
//   if (playerRandom == 2 && computerRandom == 0 ) {
//       responses += " \nThe players Wins";
//   } else {
//       responses += " \nThe Computer Wins";
//   }
//}
//
//console.log(responses);
//
//
//let someArray = ['Abulu', 'Tare', 'Tamara', 'Layefa'];
//
//let notFound = true;
//
//while (notFound) {
//   if (someArray[0] === 'Jennifer' ) {
//       console.log('Found her!');
//       notFound = false;
//   } else {
//       someArray.shift();
//   }
//}
//
//console.log(notFound);
//
//// FIBONACCI SEQUENCE

let nr1 = 0;
let nr2 = 1;
let temp;

fibonacciArray = [];

while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;

console.log(fibonacciArray);}

//PRACTICE EXERCISE 5.1

// let max = 5;
// let  randNum = Math.floor(Math.random() * max ) + 1;
// console.log(randNum);

// let status1 = false;

// while (!status1) {
//     let guess = Number(prompt( " Guess a number between 0 and 6:"));
//     if (guess === randNum) {
//         status1 = true;
//         console.log("You guessed correctly ", + randNum );
//     } else if ( guess > randNum) {
//         console.log('You guessed a number higher than expected ' + randNum);
//     } else {
//         console.log("You guessed lower than the computer " + randNum);
//     }
// }

//PRACTICE EXERCISE 5.2

let counter = 0;
let step = 2;

do {
    console.log(counter);
    counter += step;
} while (counter <= 101);

// PRACTICE EXERCISE 5.4

let myTable = [];
let rows = 5;
let cols = 10;

let counterOne = 0;

for (let i = 0; i < cols; i++) {
    tempArray = [];
    //tempArray.push(i);
    //console.log(tempArray);

    for (let x = 0; x < rows; x++) {
        counterOne++;
        tempArray.push(counterOne);
    }
    myTable.push(tempArray);
}

//console.log(myTable);
console.table(myTable);

//LOOPS AND ARRAYS SECTION

//let names = ['Sophia', 'Lorraine', 'Tare', 'Pere', 'Ebimo'];
//for (let i = 0; i < names.length; i ++){
//    names[i] = 'Hello ' + names[i];
//}
//console.log(names);

//let names = ['Sophia', 'Lorraine', 'Tare', 'Pere', 'Ebimo'];
//
//for (let i = 0; i < names.length; i ++) {
//    if (names[i].startsWith("E")) {
//        delete names[i];
//        continue;
//    }
//    names[i] = "Hello " + names[i];
//}
//
//console.log(names);

//let names = ['Sophia', 'Lorraine', 'Tare', 'Pere', 'Ebimo'];
//
//for (let i  = 9; i > names.length; i ++) {
//    names.push(i);
//}
//
//console.table(names);
//

// PRACTICE EXERCISE 5.5

let grid = [];
let totalCells = 64;
let counters = 0;
let row = [];

for (let counters = 0; counters < totalCells + 1; counters++) {
    row.push(counters);
    if (row.length % 8 == 0) {
        grid.push(row);
        row = [];
    } //if (row.length > 0) {
    //     grid.push(row);
    //}
}

// //console.log(row);
// //console.log(grid);
console.table(grid);

// // PRACTICE EXERCISE BOOK ANSWER 5.5

// const grid = [];
// const cells = 64;
// let counters = 0;
// let row;

// for ( let i = 0; i < cells + 1; i++) {
//     if (counters % 8 == 0) {
//         if (row != undefined) {
//             grid.push(row);

//         }
//         row =[];
//     }
//     counters++;
//     let temp1 = counters;
//     row.push(temp1)
// }

//  console.table(grid);

// FOR OF LOOPS EXAMPLE SYNTAX

let names = ["Sophia", "Lorraine", "Tare", "Pere", "Ebimo"];

for (let name of names) {
    console.log(name);
}

// PRACTICE EXERCISE 5.6

let emptyArray = [];

for (let i = 0; i < 30; i += 2) {
    emptyArray.push(i);
}

console.log(emptyArray);

for (let x = 0; x < emptyArray.length; x++) {
    console.log(emptyArray[x]);
}

for (let values of emptyArray) {
    console.log(values);
}

// FOR IN LOOP SYNTAX EXAMPLES AND LOOP AND OBJECT SECTION

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black"
};

for (let prop in car) {
    console.log(prop, car[prop]);
}

for (let prop in car) {
    console.log(prop);
}

for (let prop in car) {
    console.log(car[prop]);
}

// PRACTICE EXERCISE 5.7

const family = {
    father: "Evans",
    mother: "Alexandra",
    child: "Jenny"
};

for (let members in family) {
    console.log(members, family[members]);
}

// let conArray = [];
// conArray.push(family);

// for ( let i = 0; i < conArray.length; i++) {
//     console.log(conArray[i]);
// }

// for ( let x in conArray) {
//     console.log(conArray, x);
// }




const family1 = ["Father", "Mother", "Child"];

for (let i = 0; i < family1.length; i++) {
    console.log(i, family1[i]);
}

for (let x in family1) {
    console.log(x, family1[x]);
}





const family3 = {
    father: "Evans",
    mother: "Alexandra",
    child: "Jenny"
};

for ( let key of Object.keys(family3)) {
    console.log(key);
}

for ( let keys of Object.values(family3) ) {
    console.log(keys);
}




let arrKeys = Object.keys(family3);
for (let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ': ' + family3[arrKeys[i]]);
}


let art = Object.entries(family);
console.log(art);

for (const [key, value] of Object.entries(family)) {
    console.log(key, ": ", value);
}

// BREAK AND CONTINUE CODE SNIPPETS

let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "Black"
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "Red"
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "Black"
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "Black"
    }
];


for ( let i = 0; i < cars.length; i++) {
    if (cars[i].year >= 2020 ) {
        if ( cars[i].color === 'Black') {
            console.log('I have found my new car: ', cars[i]);
            break;
        }
    }
}

// CODE SNIPPET WITH CONTINUE KEYWORD  

for (let car of cars) {
    if (car.color !== 'Black') {
        continue;
    }
    if (car.year >= 2020) {
        console.log('We could get this one: ', car);
    }
}

// BE CAREFUL TO USE CONTINUE IN WHILE LOOPS 
// YOU MIGHT GET STUCK IN AN INFINITE LOOP
// let i = 1;
// while ( i < 50 ) {
//     if ( i % 2 === 0 ) {
//         continue;
//     }
//     //console.log(i);
//     i++
// }


// YOU SHOULD DO SOMETHING LIKE THIS INSTEAD 

let a = 1; 
while ( a < 50) {
    a++;
    if ( (a - 1) % 2 == 0 ) {
        continue; 
    }
    console.log(a - 1);
}

// WE COULD ALSO DO A SIMPLER VERSION 

for ( let i = 1; i < 50; i = i + 2 ) {
    console.log(i);
}




//SOME PERSONAL TRY OUT CODES 

let someThing = [1,1,1,1,];
for ( let i = 0; i < someThing.length; i ++) {
    someThing[i] = 2;
}
console.log(someThing);

let someThing1 = ['1','1','1','1',];
for ( let i = 0; i < someThing1.length; i ++) {
    someThing1[i] = 2 + someThing1[i];
}
console.log(someThing1);


let someThing2 = ['1','1','1','1','2'];
for ( let x = 0; x < someThing2.length; x ++) {
    if (someThing2[x].startsWith('1')) {
        delete someThing2[x];
        continue;
    }
    someThing2[x] = 5;
}

console.log(someThing2);


// let names1 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names1.length; i++){
//  names1.push("...")
// }// THIS CODE IS AN INFINITE LOOP

// TRYING TO SEE IF A SINGLE OBJECT WOULD WORK WITH THE OBJECT.KEYS() BUILT IN FUNCTION 

let tryOut = {father: "Abulu"};

for ( let member of Object.values(tryOut)) {
    console.log(member);
} // YES IT WORKS AND USING TRYOUT[MEMBER] GETS AN DEFINED OUTPUT 


// CHAPTER PROJECR 
// MATH MULTIPLICATION TABLE USING LOOP AND NESTED ARRAYS 

let mathTable = [];
let valueOfCols = 0;

for ( let i = 0; i < 11; i++ ) {
    let tempArray1 = [];
    for ( let a = 0; a < 11; a++ ) {
        tempArray1.push( a * valueOfCols);
    }
    mathTable.push(tempArray1);
    tempArray1 = [];
    valueOfCols +=1;
}

console.log(mathTable);
console.table(mathTable);


let mathTable1 = [];
let valueOfCols1 = 10;

const myTable1 = [];
const numm = 10;
for(let x=0; x<numm; x++) {
    const temp = [];
    for(let y = 0; y<numm; y++) {
        temp.push(x*y);
    }
    myTable1.push(temp);
}
console.table(myTable1);


function logRecursive(nr) {
    console.log("Started function:", nr);

    if (nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log("Done with recursion.");
    }
    console.log("Ended function:", nr);
}
logRecursive(3);

function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    else {
        return n * factorial(n - 1);
    }
}
factorial(5);

// Test the function
// function main() {
//     // Test cases
//     const testCases = [0, 1, 5, 10];
    
//     testCases.forEach(num => {
//         const result = factorial(num);
//         console.log(`Factorial of ${num} is: ${result}`);
//     });
// }

// // Run the main function
// main();



class Dog{
    constructor (dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;

    }
}

let dog = new Dog("Javascript", 2.4, "brown", "chihuahua");
console.log(dog.dogName, "is a", dog.breed, 'and he weighs', dog.weight, 'and has', dog.color, 'skin');
console.log(dog);


class Person {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let names1 = new Person('Tare', 'Abulu', 'James','Rukky');
console.log(names1);

//class Person1 With Properties that cannot be accessed from outside the constructor: This is done with the '#' Prefix 

class Person1 {
    #firstname ;
    #lastname;
    constructor (firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
}

let p = new Person1('Tarelily', 'Tamara');
console.log(p.firstname);


// If you want to create objects with names starting with 'M' we can modify the constructor a bit
// Even at this point the properties are still unaccessible 

class Person2 {
    #firstname;
    #lastname;
    constructor (firstname, lastname) {
        if (firstname.startsWith('M')) {
            this.#firstname = firstname;
        } else {
            this.#firstname = 'M' + firstname;
        }
        this.#lastname = lastname;
    }
}

let p2 = new Person2 ('Mariah', 'John');
let pp = new Person2 ('Elevate', 'Jon');

console.log(p2, pp);




// INTRODUCTION TO JAVASCRIPT BUILT-IN METHODS

let string = 'Hello';
console.log(
    string.concat(' there!')
    .toUpperCase()
    .replace('THERE', 'you')
    .concat( " You're amazing!")
);


let x = 7;
console.log(Number.isNaN(x));
console.log(isNaN(string));


let uri = 'https://www.example.com/submit?name=maaike van putten';
let encoded_Uri = encodeURI(uri);
console.log('Encoded:', encoded_Uri);

let decoded_Uri = decodeURI(encoded_Uri);
console.log('Decoded:', decoded_Uri);


var f = 5;
let g = 7;
 
let m = g && f;
console.log(m);

let fe = 'Abulu';
let ge = 'Tare';

let me = fe + ge;
console.log(me);

console.log(fe.concat(' ', ge));


// let uri2 = 'https://www.example.com/submit?name=this&that=some thing&code=love';
// let encoded_Uri2 = encodeURI(uri2);
// console.log('Encoded:', encoded_Uri2);

// let decoded_Uri2 = decodeURI(encoded_Uri2);
// console.log('Decoded:', decoded_Uri2);

let uris = 'https://www.example.com/submit?name=maaike van putten';
let encoded_Uris = encodeURIComponent(uris);
console.log('Encoded:', encoded_Uris);

let decoded_Uris = decodeURIComponent(encoded_Uris);
console.log('Decoded:', decoded_Uris);
// let decoded = encodeURI(encodeURIComponent(uris));
// console.log(decoded);

console.log(uris.replace('=maaike van putten',encodeURIComponent('=maaike van putten') ));


//PERFORMING A CERTAIN ACTION FOR EVERY ITEM 

let arrs = [ 'grapefruit', 4, 'hello', 5.6, true]
function printStuff(a, b) {
    console.log("Printing stuff: ", a, 'on array position:', b);
}
arrs.forEach(printStuff);

// FILTERING AN ARRAY

function checkString(element, index) {
    return typeof element === 'string';
}
filterArr = arrs.filter(checkString);
console.log(filterArr);


// CHECKING A CONDITION FOR ALL ELEMENTS, CHECKING IF SOMETHING TRUE FOR ALL ELEMENT IN THE ARRAY

let check = arrs.every(checkString);
console.log(check);

// MAPPING THE VALUES OF AN ARRAY

let adArrs = [1, 2, 3, 4];
let mapArrs = adArrs.map(x => x + 1);
console.log(mapArrs);


// // PRACTICE EXERCISE 8.2
// // CHAT GPT ANSWER 
// let people = ['Laurence', 'Mike', 'Larry', 'Kim', 'Joanne', 'Laurence', 'Mike'];

// let anonFunction = people.filter(( info, index ) => {
// console.log(`Checking: ${info}, index: ${index}, First Index: ${info.indexOf(info)}`);
// return info.indexOf(info) === index;
// });

// console.log('Unique Names:', anonFunction);

// BOOKS ANSWER 

let people1 = ['Laurence', 'Mike', 'Larry', 'Kim', 'Joanne', 'Laurence', 'Mike'];
let arr2 = people1.filter( (value, index, array ) => {
    console.log(value, index, array.indexOf(value) );
    return array.indexOf(value) === index;
});

console.log(arr2);


// // MY ANSWER FOR PRACTICE EXERCISE 8.2

// let duplicateNames = ['Laurence', 'Mike', 'Larry', 'Kim', 'Joanne', 'Laurence', 'Mike'];
// let useFiler = duplicateNames.filter((value, index, array => {
//     console.log(value, index, array.indexOf(value))
//     return true;
// }))


// PRACTICE EXERCISE 8.3

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplyNum = numbers.map( a => a * 2);
console.log(multiplyNum);

let nummm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiNum = nummm.map( function (e) {
    //console.log(e * 2);
    return e * 2;
})
console.log(multiNum);


let sum = parseInt('1A', 16);
console.log(sum);


// STRING METHODS 

let s1 = 'Hello ';
let s2 = 'Javascript';

let combineString = s1.concat(s2);
console.log(combineString);

// CONVERTING STRINGS TO ARRAY WITH THE SPLIT METHODS 

let newArr = combineString.split('H');
console.log(newArr);
console.log(typeof newArr);

let favoriteFruits = 'strawberry,watermelon,grapefruits';
let arrFruits = favoriteFruits.split(',');
console.log(arrFruits);


// CONVERTING ARRAYS TO A STRING 

let letters = ['a', 'b', 'c'];
let xx = letters.join();
console.log(typeof xx, xx);


let letterss = ['a', 'b', 'c'];
let ss = letterss.join('-');
console.log(ss);



// WORKING WITH INDEX AND P0SITIONS 


let poem = 'Roses are red, violets are blue, if I can do JS, and python';
let index_re = poem.indexOf('re');
console.log(index_re);

let indexNotFound = poem.indexOf('python');
console.log(indexNotFound);

if (poem.indexOf('python') != -1) {
    // Code to execute 
    console.log('Hey Girl what is up');
}

let searchStr = 'When I see my fellow, I say hello';
let pos = searchStr.search('lo');
console.log(pos);


let notFoundd = searchStr.search('Javascript');
console.log(notFoundd);

let lastIndex_re = poem.lastIndexOf('re');
console.log(lastIndex_re);

let pos1 = poem.charAt(10);
console.log(pos1);

let pos2 = poem.charAt(1000);
console.log(pos2);


// CREATING SUBSTRINGS WITH THE SLICE METHOD 

let str = 'Creating a substring';
let subStr = str.slice(5);
let subStr2 = str.slice(0, 3);
console.log('1:', subStr);
console.log('2:', subStr2);


// REPLACING PARTS OF THE STRING 

let hi = 'Hi buddy';
let new_hi = hi.replace('buddy', 'pascal');
console.log(new_hi);


let new_hi2 = hi.replace('not there', 'never there');
console.log(new_hi2);


let s3 = 'hello hello';
let new_s3 = s3.replace("hello", 'oh');
console.log(new_s3);

let s33 = 'hello hello';
let new_s33 = s33.replaceAll('hello', 'oh');
console.log(new_s33);


// UPPERCASE AND LOWERCASE METHOD 

let low_bye = 'bye!';
let up_bye = low_bye.toUpperCase();
console.log(up_bye);


let caps = 'HI HOW ARE YOU';
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);

// A SITUATION WHERE WE WANT THE ONLY FIRST TO BE CAPITALIZED 

let capss = 'HI HOW ARE YOU';
let fixed_capss = capss.toLocaleLowerCase();
let first_capital = fixed_capss.charAt(0).toUpperCase().concat(fixed_capss.slice(1));
console.log(first_capital);

// // PRACTICE EXERCISE 8.4

// let stringss = 'thIs will be capiTalized for each word';

// let arss = [];



// function maniString(a) {
//    let summs= a.toLowerCase();
//    summs = summs.split(' ');
//    arss.push(summs);
//    arss.forEach()

//     return summs;
// }

//console.log(maniString(stringss));


// function mann(a) {
//     let wen = a.toLowerCase();
//     return wen;
// }

// console.log(mann(stringss));

// PRACTICE EXERCISE 8.5


let stringsss = 'I love Javascript';
string.toLowerCase();
let arr = [ 'a', 'e', 'i', 'o', 'u'];
arr.forEach( (e) => {
    console.log(e);
    stringsss = stringsss.replaceAll(`${e}`, arr.indexOf(`${e}`));
    //console.log(stringsss)
    
});
console.log(stringsss);

// BOOKS ANSWER FOR PRACTICE EXERCISE 8.5

let wordToReplaceVowels = 'I love Javascript';
wordToReplaceVowels.toLowerCase();
let arrss = [ 'a', 'e', 'i', 'o', 'u'];
arrss.forEach( (letters, index) => {
    console.log(letters);
    wordToReplaceVowels = wordToReplaceVowels.replaceAll(letters, index)
});

console.log(wordToReplaceVowels);


// NUMBERS METHOD 
// CHECKING IF SOMETHING IS (NOT) A NUMBER 

let xs = 34;
console.log(isNaN(xs));
console.log(!isNaN(xs));

let strs = 'hi';
console.log(isNaN(str));

let add = !isNaN(xs);

console.log(add);

//xs = isNaN(xs);
console.log(xs, isNaN(xs));

// CHECKING IF SOMETHING IS FINITE 

let xNum = 3;
let strx = "finite";
console.log(isFinite(xNum));
console.log(isFinite(str));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));


let checkings = typeof Infinity;
console.log(checkings);

console.log(1/0);
console.log(Infinity + 1);
console.log(1e308 * 10);

let mmm = 1;
let ggg = mmm / 0;
console.log('Yes', ggg);

let aWord = 'I am a girl';

// function encodeString (a) {
//     let word = a.toLowerCase();
//     let array = word.split('');
//     let emptyArray = [];
//     let vowels = {a:1, e:2, i:3, o:4, u:5};
//     let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
//     for (let i = 0; i < array.length; i++) {

//         if ( array[i] === consonants[i].length) {
//             console.log(emptyArray.push(array[i] + 'a'));
//         }
//         // if ( array[i] === ' ') {
//         //     emptyArray.push(' ');
            
//         // }
        
//         // if ( array[i] === vowels ) {
//         //     emptyArray.push(`${vowels[array[i]]}`)
//         // }
//     }
//     console.log(emptyArray);

//     return emptyArray.join('');
// }

// console.log(encodeString(aWord));


// CHAT GPT ASSISTANCE ON PREVIOUS CODE 

function encodeString(a) {
    let word = a.toLowerCase();
    let array = word.split('');
    let emptyArray = [];
    let vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    
    for (let i = 0; i < array.length; i++) {
        // Check if the character is a consonant
        if (consonants.includes(array[i])) {
            emptyArray.push(array[i] + 'a');
        }

        // Check if the character is a space
        if (array[i] === ' ') {
            emptyArray.push(' ');
        }

        // Check if the character is a vowel
        if (array[i] in vowels) {
            emptyArray.push(`${vowels[array[i]]}`);
        }
    }

    console.log(emptyArray);

    return emptyArray.join('');
}

// Example usage
console.log(encodeString("hello world"));


// MY ORIGINAL CODE ON ENCODING WORDS 

 

// CREATING A FUNCTION THAT ENCODES LETTERS AND WORDS
let namettt = 'I am double doing things';

 function encodeWords(word) {
   let vowelInObj = {a:1, e:2, i:3, o:4, u:5};
   let arr =[]; 
   let arrays = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k','l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
   
   let words = word.toLowerCase();
   let array = words.split('');
    for (let i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        arr.push(" ");
      }
      for (let val in vowelInObj){
        
        if( array[i]=== val) {
       
          arr.push(vowelInObj[val]);
        }
      }
      for (let vowels of arrays) {
        if (vowels === array[i]) {
            let ggg = array[i].concat('a');
            arr.push(ggg);
     
     }
     
   }
    }
    console.log(arr);
   
   //console.log(array);
   //console.log(vowelInObj);
   //console.log(words);
   return arr.join("");
 }
 
console.log(encodeWords(namettt));

// PRACTICE EXERCISE 8.6

let piVal = Math.PI;
console.log(piVal);

let valuess = 5.7;
let cVal = Math.ceil(valuess);
console.log(cVal)

let fValue = Math.floor(valuess);
console.log(fValue);

let rValue = Math.round(valuess);
console.log(rValue);

let random = Math.random() * 5;
console.log(random);

let randomZero = Math.floor(Math.random() * 11);
console.log(randomZero);

let randomOne = Math.floor(Math.random() * 11) + 1;
console.log(randomOne);

let randomHun = Math.floor(Math.random() * 101) + 1;
console.log(randomHun);

function randomNums (min, max) {
    console.log(min, max);
    // let mins = Math.floor(Math.random() * min);
    // let maxs = Math.floor(Math.random() * max);

    if (min < max ) {
        max = Math.floor(Math.random() * max);
    }
    return max;
}
console.log(randomNums(1, 5));

function ranss ( min, max) {
    console.log('current value of min:', min, 'current value of max:', max);

    if (min === max ) {
        return `We have generated ${min} times`;
    }
    let nums = Math.floor(Math.random() * max);
    console.log('Generated value:', nums);

    return ranss(min + 1, max)
}
console.log(ranss(0, 100));



// DATE METHODS 

// CREATING DATES 


let currentDateTime = new Date();
console.log(currentDateTime);

// SET AND GET DATES 

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setFullYear(2010);
d.setMonth(9);
d.setDate(10);
console.log(d);

let rm = '';
let us = 'Wednesday';
let med = us.length;
console.log(med);

let mee = Math.floor(Math.random()*med) +1;
console.log(mee);

let poss = us.charAt(mee);

rm = rm.concat(poss);
console.log(rm);

console.log(poss);


// let wordValue = 'Tamaratarelayefa';
// let wordValueLength = wordValue.length;

// function mrScramble (a) {
//     let wordValue = a;
//     let tempString = '';
//     for ( let i = 0; i < wordValue.length; i++) {
//         let random = Math.floor(Math.random() * wordValue.length);
//         let randomChar = wordValue.charAt(random);
//         tempString = tempString.concat(randomChar);
//         console.log('Temp String:', tempString, 'Word Value:', wordValue);
//         a.replace(randomChar, '');

//     }
//     return tempString;
// }
// console.log(mrScramble(wordValue));




//CHATGPT  CORRECTION TO MY CAHPTER EIGHT PROJECT 



let wordValue = 'Tamaratarelayefa';
let wordValueLength = wordValue.length;

function mrScramble(a) {
    let wordValue = a; // Copy of the input string
    let tempString = ''; // To store the scrambled word

    for (let i = 0; i < wordValueLength; i++) {
        let random = Math.floor(Math.random() * wordValue.length); // Random index
        let randomChar = wordValue.charAt(random); // Random character from the string
        tempString += randomChar; // Append the random character to the scrambled string
        console.log('Temp String:', tempString, 'Word Value:', wordValue);
        // Remove the random character from wordValue
        wordValue = wordValue.substring(0, random) + wordValue.substring(random + 1);
    }

    return tempString;
}

console.log(mrScramble(wordValue));


// CPUNTDOWN TIMER CHAPTER EIGHT PROJECT 
// let endDate = new Date ();
// endDate = endDate.toString();
// console.log(endDate);

// let dates = endDate.getTime();
// console.log(dates);




let endDate1 = new Date(2025, 0, 16);
console.log(endDate1);

let dates1 = endDate1.getTime();
console.log(dates1);

let certain1 = endDate1.toString();
console.log(certain1);


function countdownTimer1(a) {
    let endDate = Date.parse(a);
    console.log(endDate);
    let now = Date.now(); // Current date and time in milliseconds
    let timeLeft = endDate - now; // Time left in milliseconds
    console.log(timeLeft);
    let days = Math.floor(timeLeft/ (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % 1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor((timeLeft % 1000 * 60) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

console.log(countdownTimer1(endDate1));
console.log(countdownTimer1(certain1));

console.log(' ');
console.log(' ');
console.log(' ');



// CHAT GPT IMPROVEMENT ON MY CODE


let endDate = new Date(2025, 0, 16); // January 16, 2025
console.log(endDate);

let dates = endDate.getTime(); // Get time in milliseconds
console.log(dates);

let certain = endDate.toString(); // Convert to string representation
console.log(certain);

function countdownTimer2(a) {
    let endDate = new Date(a); // Create a Date object from the passed argument
    console.log('End Date:', endDate);
    let now = Date.now(); // Current date and time in milliseconds
    let timeLeft = endDate - now; // Time left in milliseconds
    console.log('Time Left:', timeLeft);

    // Calculate days, hours, minutes, seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

console.log(countdownTimer2(endDate)); // Pass Date object
console.log(countdownTimer2(certain)); // Pass string representation (works fine now)


// COMPLETE CHAPTER PROJECT CODE FROM CHATGPT 

// Countdown function that calculates the time left
/*function countdownTimer(a) {
    let endDate = new Date(a); // Create a Date object from the passed argument
    let now = Date.now(); // Current date and time in milliseconds
    let timeLeft = endDate - now; // Time left in milliseconds

    // Calculate days, hours, minutes, seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds }; // Return as an object
}

// The update function will use setTimeout() to run every second
function update() {
    let endDate = new Date(2025, 0, 16); // Example date (January 16, 2025)
    
    // Call countdownTimer and hold the result in a temporary variable
    let timeRemaining = countdownTimer(endDate);

    // Create an empty variable for output
    let output = "";

    // Use a for loop to iterate through the properties and values of timeRemaining
    for (let property in timeRemaining) {
        if (timeRemaining.hasOwnProperty(property)) {
            output += `${property}: ${timeRemaining[property]} | `;
        }
    }

    // Output the result
    console.log(output);

    // Call update() every second using setTimeout
    setTimeout(update, 1000);
}

// Start the update function
clearTimeout(update()); 



// BOOK'S ANSWER 


const endDatess = "Sept 1 2025";
function countdown() {
 const total = Date.parse(endDatess) - new Date();
 const days = Math.floor(total / (1000 * 60 * 60 * 24));
 const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
 const mins = Math.floor((total / 1000 / 60) % 60);
 const secs = Math.floor((total / 1000) % 60);
 return {
 days,
 hrs,
 mins,
 secs
 };
}
function update() {
 const temp = countdown();
 let output = "";
 for (const property in temp) {
    output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 1000);
}
update(); */


 
let element = document.getElementById('example');

// Using console.log()
console.log(element);
// Output: <div id="example" class="test-class">Hello, world!</div>

// Using console.dir()
console.dir(element);
// Output: An interactive, expandable object with properties like id, className, innerHTML, style, etc.


function randDescription() {
    let askSome = prompt('Enter a number for a random wish?: ')
    let arrWords = ['Hope', 'Love', 'Joy', 'Happiness', 'Success', 'Rejoice'];
    let randomNum = Math.floor(Math.random() *arrWords.length);
    console.log('Your wish:', arrWords[randomNum]);

}
randDescription();