import filtersReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';



test('Should see the default expense', () => {
    const action = { type: '@@INIT' };
    const state = filtersReducer(undefined,action);
    expect(state).toEqual([]);
});

test('Should see the expense to remove', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = filtersReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]])
})
test('Should see the expense to add', () => {
    const expense = {
        id: 4,
        description: 'Gum4',
        note: '',
        amount : 1095,
        createdAt: 3001
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = filtersReducer(expenses, action);
    expect(state[3]).toEqual(expense);
})

test('Should see the expense to edit', () => {
    const updates = {
        description: 'Gum3',
        note: 'to update',
        amount : 1095,
        createdAt: 3001
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    }
    const state = filtersReducer(expenses, action);
    expect(state[2]).toEqual({id : expenses[2].id, ...updates});
})
test('Should see no expense to edit', () => {
    const updates = {
        description: 'Gum3',
        note: '',
        amount : 1095,
        createdAt: 3001
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = filtersReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('Should set expense', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses : expenses[1]
    }
    const state = filtersReducer(expenses, action);
    //console.log(state);
    expect(state).toEqual(expenses[1]);
})


