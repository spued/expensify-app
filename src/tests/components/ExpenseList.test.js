import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList }from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should render thr right expenses', () =>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render the empty expenses', () =>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})