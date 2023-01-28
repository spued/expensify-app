console.log("person is running.");

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 20;
const isSenior = (age) => age >=60;
export {
    isAdult,
    canDrink,
    isSenior as default
}