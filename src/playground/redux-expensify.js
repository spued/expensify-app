import { createStore, combineReducers } from 'redux';

const subscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    
    console.log(visibleExpense);
})

const expenseOne = store.dispatch(addExpense({
    description : 'Rent',
    amount : 100,
    createdAt: -2000
}));

const expenseTwo = store.dispatch(addExpense({
    description : 'Coffee',
    amount : 300,
    createdAt: -1000
}));

//store.dispatch(removeExpense({id : expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 333 }));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));

//console.log(expenseOne);

const demoState = {
    expenses : [{
        id: 'poijasflower',
        description: 'Thos flower',
        note : 'This is lastflower i will buy from this',
        amount: 545400,
        createdAt : 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined 
    }
};

/* const user = {
    name: 'sunya',
    age: '46'
}

console.log({
    age: 55,
    ...user,
    
    location: "BKK"
}) */