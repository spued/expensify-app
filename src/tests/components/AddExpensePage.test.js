import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expense from '../fixtures/expenses';
import { wrap } from '@cfaester/enzyme-adapter-react-18/dist/enzyme-adapter-utils';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn( )};
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
})

test('Should render expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test ('Should render expense with on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expense[1]);
})