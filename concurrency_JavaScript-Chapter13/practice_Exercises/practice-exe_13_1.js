function greet(fullname) {
    //fullname = [];
    console.log('Hi, How are you', fullname[0], fullname[1]);
    console.log('Welcome', ...fullname);

    // WITHOUT AN ARRAY
    console.log('Hello, ', fullname);
}

function personInfo(name, callback) {
    let names = name.split(' ');
    callback(names);

    // WE CAN ALSO GET THE FULLNAME WITHOUT CONVERTING TO AN ARRAY
    callback(name);
}

personInfo('Abulu Tare Jennifer', greet);

