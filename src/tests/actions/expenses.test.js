import { addExpense,editExpense,removeExpense} from '../../actions/expenses'

test('I want to setup the test for remove expense.', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        'type': 'REMOVE_EXPENSE',
        'id' : '123abc'

    })
})

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
    const expenseData = {
        description : 'Rent',
        amount : 10200,
        createdAt : 1000,
        note: 'This is note rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        'type' : 'ADD_EXPENSE',
        'expense' : { ...expenseData,
            id :  expect.any(String)
        }
    })
})

test('I want to test the default value for add expense', () => {
    const action = addExpense();
    expect(action).toEqual({
        'type' : 'ADD_EXPENSE',
        'expense' : { 
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id :  expect.any(String)
        }
    })
})