//======== Object destructuring ===========
/* const person ={
    name: 'Sunya',
    age: 48,
    location : {
        city: 'Bangkok',
        temp: '33'
    }
}

const {name = 'Anonymous', age} = person;
const {city, temp : temperature } = person.location;
console.log(`${name} is ${age}.`);
if(city && temperature) {
    console.log(`It's ${temperature} at ${city}.`);
} */

/* const book = {
    name: 'Ego is enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Pengiun'
    }
}

const { name : publisher = 'Self publish'} = book.publisher;
console.log(publisher); */

//======== Array destructuring ===========

const address = ['147 charoen pol 1','bangkok','Thailand','1555'];
const [ street, province, country] = address;

console.log(`${province} is in ${country}`);

const item = ['Hot coffee', '10THB', '20THB', '30THB'];
const [name, small, medium, big] = item;
console.log(`The price of ${name} in medium size is ${medium}`)