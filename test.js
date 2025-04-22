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
