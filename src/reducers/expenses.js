const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
    //console.log(action)
    switch(action.type ) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'SET_EXPENSES':
            return  action.expenses;
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return { 
                    ...expense,
                    ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        }
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        default:
            return state
    }
}
