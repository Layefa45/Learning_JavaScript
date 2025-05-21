let val = 10;



function tester(val) {
    val += 10;
    if (val < 100) {
        return tester(val);
    }
    return val;
}

console.log(tester(val));
console.log(val);

console.log(50 + tester(val));

let testFunction = function () {
    console.log('Hello');
} ();

(function () {
    console.log('Welcome');
})();


(function () {
    let firstName = 'Laurence';
}) ();

let result = (function () {
    let firstName = 'Lawrence';
    return firstName;
}) ();

console.log(result);

(function (firstName) {
    console.log('My name is ' + firstName);

}) ('Tamaratarelayefa');

var addFive = function (num) {
    return num + 2;
}

let  addFive1 = (num) => num + 2;
console.log(addFive(14));


class Person {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log('Hi there!, ' , this.firstname);
    }

    compliment(name, object) {
        return "That's a wonderful " + object + ', ' + name;
    }
}

let p = new Person ("Tare", "Evans");
p.greet();
let compliment = p.compliment("Tammy", 'bucket');

console.log(compliment);
console.log(p);


class Person2 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname() {
        return this.firstname + ' ' + this.lastname;
    }
}

let myFirstFriend = new Person2 ('Tare', 'Evans');
let mySecondFriend = new Person2 ('Jenny', 'Abulu');

let fullname = myFirstFriend.fullname();
console.log(fullname);

let fullname2 = mySecondFriend.fullname();
console.log(fullname2);
console.log(myFirstFriend.fullname());
console.log(mySecondFriend.fullname());

let name = 5;
console.log(Array.isArray(name));

let exp = /([a-e])\w+/g;
let word = 'Hope you enjoy javascript';
console.log(word.match(exp));

let exp1 = /([a-e])/g;
let word1 = 'Hope gil';
console.log(word1.match(exp1));

const a = 'hello world';
(function () {
    const a = 'Javascript';
})();
console.log(a);

console.log("a");
setTimeout(() => {
 console.log("b");
}, 0);
console.log("c");

let people = ['Laurence', 'Mike', 'Larry', 'Kim', 'Joanne', 'Laurence', 'Mike'];

let newArr = people.filter((value, index, array) => {
    console.log(value, index, array.indexOf(value));
    return array.indexOf(value) === index;
});
console.log(newArr)


let words = 'thIs will be capiTalized for each word';

function mainString (a) {
    let transfr = a.toLowerCase();
    let empArr = [];
    transfr = transfr.split(' ');
    transfr.forEach((e) => {
        empArr.push(e.charAt(0).toUpperCase() + e.slice(1))});
    return empArr.join(' ');
 }
console.log(mainString(words));


function genRanNum(min, max) {
    console.log('Current value of min:', min, 'Current value of max:', max);
    if (min > max ) {
        return `We've generated ${min} times`;
    }
    let nums = Math.floor(Math.random() * max);
    console.log('Generated Value', nums);
    return genRanNum(min+1, max);
}
// console.log(genRanNum(0, 100));
genRanNum(0,100);

function ranNum(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}
ranNum(0, 50);
for(let i = 0; i < 100; i++) {
    console.log('We generated:', ranNum(0, 50));
}

let wordValue = 'Tamaratarelayefa';
let wordValueLength = wordValue.length;

function mrScramble(a) {
    let wordValue = a;
    let tempString = '';

    for (let i = 0; i < wordValueLength; i++ ) {
        let random = Math.floor(Math.random() * wordValue.length);
        let randomChar = wordValue.charAt(random);
        tempString += randomChar;
        console.log('Temp String:', tempString, 'Word Value:', wordValue);
        wordValue = wordValue.substring(0, random) + wordValue.substring(random + 1);
    }
    return tempString;
}
console.log(mrScramble(wordValue));

let str = 'JavaScript';
function scramble(val) {
    let max = val.length;
    let temp = '';

    for (let i = 0; i < max; i++ ) {
        console.log('Length of word remaing:', val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index];
        console.log('Temp String:', temp);
        val = val.substr(0, index) + val.substr(index + 1);
        console.log('Remaining value:', val);
    }
    return temp;
}
console.log(scramble(wordValue));