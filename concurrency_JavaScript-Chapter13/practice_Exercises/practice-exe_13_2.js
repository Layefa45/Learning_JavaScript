// IN THIS EXERCISE YOU WILL CREATE A COUNTER THAT WILL OUTPUT THE VALUES IN SEQUENCE USING PROMISES 

let promise = new Promise ((resolve, reject) => {
    resolve('Start Counting');
});

function counter(val) {
    console.log(val);
}

promise
    .then(value => {counter(value); return 'One'})
    .then(value => {counter(value); return 'Two'})
    .then(value => {counter(value); return 'Three'})
    .then(value => {counter(value);})

