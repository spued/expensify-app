import { v1 as uuidv1 } from 'uuid';
import db from '../firebase/firebase'

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return db.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }));
        })
    }
}

export const removeExpense = ({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})

// Set expenses
export const setExpenses = (expenses) => ({
        type: 'SET_EXPENSES',
        expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return db.ref('expenses').once('value').then((snapshot) => {
            let _expenses = [];
            snapshot.forEach((childSnapshot) => {
                //console.log(childSnapshot.val());
                _expenses.push({
                    id : parseInt(childSnapshot.key),
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(_expenses))
        });
        
    };
};