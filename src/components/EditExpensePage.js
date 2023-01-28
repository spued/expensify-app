import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// make it class
export class EditExpensePage extends React.Component { 
    onSubmit = (expense) => {
        //console.log(expense);
        this.props.editExpense( this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({ id : this.props.expense.id});
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                This is edit expense component id = { this.props.expense.id}
                <ExpenseForm 
                    expense = { this.props.expense }
                    onSubmit = { this.onSubmit }
                />
                <button onClick={this.onRemove}></button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense : (id) => dispatch(removeExpense({ id }))
})
const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);