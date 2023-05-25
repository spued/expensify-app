import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
       {
            props.expenses.length === 0 ? (
                <p> No expense.</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={ expense.id } { ...expense }/>;
                }) 
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    let _expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenses: _expenses
    }
}

export default connect(mapStateToProps)(ExpenseList);