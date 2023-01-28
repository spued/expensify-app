const add = (a,b) => {
    return a + b;
}

const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('Show add two numbers', () => {
    const result = add(3,4);
    expect(result).toStrictEqual(7);
})

test('Correct greeting', () => {
    const result = generateGreeting('Batman');
    expect(result).toStrictEqual('Hello Batman');
})

test('Correct default greeting', () => {
    const result = generateGreeting();
    expect(result).toStrictEqual('Hello Anonymous');
})