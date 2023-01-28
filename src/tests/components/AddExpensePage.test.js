import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expense from '../fixtures/expenses';
import { wrap } from '@cfaester/enzyme-adapter-react-18/dist/enzyme-adapter-utils';

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn( )};
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
})

test('Should render expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test ('Should render expense with on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expense[1]);
})