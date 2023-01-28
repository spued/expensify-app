import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("Shoudl see the correct form", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSanpshot;
})

test("Shoudl see the correct expense form", () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]} />);
    expect(wrapper).toMatchSanpshot;
})

test("Should render error if no data submitted", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error_message').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test("Should set the description input", () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('description')).toBe(value);
})

test ("Should set the note on textarea", () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : { value }
    });
    expect(wrapper.state('note')).toBe(value);
})

test("Should set the amount input if valid", () => {
    const value = '22.22';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})
test("Should NOT set the amount input if invalid", () => {
    const value = '22.229';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('amount')).not.toBe(value);
})

test("Should call on onSubmit valid submit", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error_message')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount : expenses[0].amount/100,
        note : expenses[0].note,
        createdAt: expenses[0].createdAt
    });
})

test("Should set the date on date change", () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})
test("Should set calendar on focus change", () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
})