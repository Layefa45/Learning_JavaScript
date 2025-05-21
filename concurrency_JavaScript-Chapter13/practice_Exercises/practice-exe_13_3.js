// THIS EXERCISE WILL DEMONSTRATE HOW TO USE AWAIT TO WAIT ON A PROMISE INSIDE AN ASYNC FUNCTION.
// USING AWAIT AND ASYNC, CREATE A COUNTER WITH TIMEOUT() AND INCREMENT A GLOBAL COUNTER VALUE.

let counter = 0;

function startCount(num) {
    console.log('ready', num + ' counter:', counter);
    return new Promise (resolve => {
        setTimeout(() => {
            counter += 1;
            resolve(num);
        }, 1000);
    });
}

async function count(x) {
    let nums = await startCount(x);
    console.log('x value', x + ' counter:', counter);
}

for(let i = 1; i < 4; i++ ) {
    count(i);
}