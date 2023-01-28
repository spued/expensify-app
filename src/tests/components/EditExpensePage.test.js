import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage} from '../../components/EditExpensePage';
import expense from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn( )};
    wrapper = shallow(<EditExpensePage 
        expense={ expense[2] } 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history} 
        />);
})

test('Should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should edit expense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense[2].id, expense[2]);
});

test('Should remove expense page correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ 
        id : expense[2].id 
    });
});