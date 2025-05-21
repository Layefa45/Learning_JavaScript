let promise = new Promise( function (resolve, reject) {
    // DO SOMETHING THAT MIGHT TAKE A WHILE
    // LET'S JUST SET X INSTEAD FOR THIS EXAMPLE

    let x = 10; 
    if (x > 10) {
        resolve(x); // ON SUCCESS
    } else {
        reject('Too Low');
    }
});

promise.then(
    function (value) {
        console.log('Success');
    },
    function (error) {
        console.log('Error', error)
    }
);

const promises = new Promise ((resolve, reject) => {
    resolve('Success');
})
    .then(value => {
        console.log(value);
        return 'we';
    }) 
    .then(value => {
        console.log(value);
        return 'can';
    })
    .then(value => {
        console.log(value);
        return 'chain';
    })
    .then(value => {
        console.log(value);
        return 'promises';
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    });


const promises2 = new Promise ((resolve, reject) => {
    reject('oops...')
})
    .then(value => {
        console.log(value);
        return 'we';
    })
    .then(value => {
        console.log(value);
        return 'can';
    })
    .then(value => {
        console.log(value);
        return 'chain';
    })
    .then(value => {
        console.log(value);
        return 'promises';
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })
