import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error_message : ''
        };
    }
    
    onDescriptionChange = (evt) => {
        const description = evt.target.value;
        this.setState (() => ({ description }));
    };
    onNoteChange = (evt) => {
        const note = evt.target.value;
        this.setState (() => ({ note }));
    };
    onAmountChange = (evt) => {
        const amount = evt.target.value;
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState (() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState (() => ({ createdAt }));
        }
    };
    onFocusChanged = ({ focused }) => {
        this.setState (() => ({ calendarFocused : focused }));
    };
    onSubmit = (evt) => {
        evt.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState (() => ({ error_message : 'I need description and amount.' }));
        } else {
            this.setState (() => ({ error_message : '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    onRemove = () => {
        this.props.onRemove();
    }
    render() {
        return (
            <div>
                {this.state.error_message && <p>{this.state.error_message}</p>}
                <form onSubmit={this.onSubmit}> 
                    <input 
                        type='text'
                        autoFocus
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.onDescriptionChange}>
                    </input>
                    <input 
                        type='number'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}>
                    </input>
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = { this.state.calendarFocused }
                        onFocusChange = { this.onFocusChanged }
                        numberOfMonths = {1}
                        isOutsideRange= {() => false }
                    />
                    <textarea
                        placeholder='Add the note for your expense. (Optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
                <button id='remove_button' onClick={this.onRemove}>Remove</button>
            </div>
        )
    };      
}
