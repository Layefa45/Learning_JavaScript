let jsonObject = [
    {
        "name":"Tare",
        "surname": "Evans",
        "age": 23,
        "country": "Nigeria"
    },
    {
        "name":"Atallah",
        "surname": "Maxxie",
        "age": 27,
        "country": "Belgium"
    }
];

let newStr = JSON.stringify(jsonObject);
console.log(newStr);

let newObj = JSON.parse(newStr);
console.log(newObj);

newObj.forEach((element) => {
    console.log(element);
    console.log(element.name);
});


