function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Something' + x);
        }, 2000);
    });
}

async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);

function saySomething1(a) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Something Like This ' + x)
        }, 2000);
    });
}

function talks(a) {
    const words = saySomething(a);
    console.log(words);
}
talks(2);
talks(4);
talks(8);