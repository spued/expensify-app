const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Sunya J.',
            age: 47
        });
        //reject('Something when wrong');
    },5000);
});

console.log('before');

promise.then((data) => {
    console.log(1, data);
    return new Promise((resolve) => {
        resolve('This is another promise');
    });
}).then((str) => {
    console.log('Does this run?', str);
}).catch((error) => {
    console.log('Error:', error);
})

console.log('after');