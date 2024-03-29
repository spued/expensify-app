import { v1 as uuidv1 } from 'uuid';
import db from '../firebase/firebase'

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return db.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            
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

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //console.log(`users/${uid}/expenses/${id}`);
        return db.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id));
        })
    };
}

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = ( id , updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        });
    };
};

// Set expenses
export const setExpenses = (expenses) => ({
        type: 'SET_EXPENSES',
        expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            let _expenses = [];
            snapshot.forEach((childSnapshot) => {
                //console.log(childSnapshot.key);
                _expenses.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(_expenses))
        });
        
    };
};