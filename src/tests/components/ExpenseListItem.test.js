import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';


test("Should see the right expense", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})

test("Should see the right expense", () => {
    const wrapper = shallow(<ExpenseListItem />);
    expect(wrapper).toMatchSnapshot();
})
