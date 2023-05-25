import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, startAddExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

let createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => { done() });
})

test('I want to setup the test for remove expense.', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        'type': 'REMOVE_EXPENSE',
        'id' : '123abc'

    })
})

test('Should remove expense from firebase', (done) => {
    const _store = createMockStore({});
    let id = expenses[2].id;
    _store.dispatch(startRemoveExpense({id})).then(() => {
        let actions = _store.getActions();
        //console.log(actions);
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done();
    })
});

test('I want to set the test for edit expense', () => {
    const action = editExpense( 
        '123abc',
        {
            startedAt: 200000, 
            amount: 20
        }
    )

    expect(action).toEqual({
        'type' : 'EDIT_EXPENSE',
        'id' :'123abc',
        'updates' : { 
                    startedAt : 200000,
                    amount: 20
                }    
    })
})

test('I want to test the provided value for add expense', () => {
   
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        'type' : 'ADD_EXPENSE',
        'expense' : expenses[2]
    })
})


test('Should add expense to database and store', (done) => {
    let store = createMockStore({});
    const expenseData = {
        description : "Mouse",
        amount : 100,
        note : 'Buy mouse',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense : {
                id : expect.any(String),
                ...expenseData
            }
        });
        return database.ref('expenses/' + actions[0].expense.id).once('value');
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
});
test('Should add defaults expense to database and store', (done) => {
    let store = createMockStore({});
    const expenseData =  {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    } ;
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense : {
                id : expect.any(String),
                ...expenseData
            }
        });
        return database.ref('expenses/' + actions[0].expense.id).once('value');
        
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
});

test('Should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should get expense from firebase', (done) => {
    const _store = createMockStore({});
    _store.dispatch(startSetExpenses()).then(() => {
        let actions = _store.getActions();
        //console.log(actions);
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
});

