import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from "../../components/ExpenseListFilters"
import {filters, altFilters} from "../fixtures/filters"



let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;
beforeEach(() => {
    setTextFilter= jest.fn(),
    sortByDate = jest.fn(),
    sortByAmount = jest.fn(),
    setStartDate = jest.fn(),
    setEndDate = jest.fn(),
    wrapper = shallow(
    <ExpenseListFilters 
        filters={ filters }
        setTextFilter={setTextFilter}
        sortByAmount={ sortByAmount}
        sortByDate={ sortByDate} 
        setStartDate={setStartDate}
        setEndDate={setEndDate}
     />
    )
})

test ('Should render filter corrrectly', () => {
    expect(wrapper).toMatchSnapshot();
})

test ('Should render altFilter corrrectly', () => {
    wrapper.setProps({ filters : altFilters});
    expect(wrapper).toMatchSnapshot();
})

// Should handle text change
test ('Should render text change filter corrrectly', () => {
    const value = 'sometext';
    wrapper.find('input').simulate('change',{target : {value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test ('Should change sort by date corrrectly', () => {
    const value = 'date';
    wrapper.setProps({ filters : altFilters});
    wrapper.find('select').simulate('change', {target : { value }});
    expect(sortByDate).toHaveBeenCalled();
})

test ('Should change sort by amount corrrectly', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {target : { value }});
    expect(sortByAmount).toHaveBeenCalled();
})

test ('Should start date corrrectly', () => { 
    const startDate = moment(0).add(4, "years");
    const endDate = moment(0).add(8, "years");
    //console.log(startDate);
    wrapper.find('DateRangePicker').prop('onDatesChange')( startDate, endDate );
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    
})

test ('Should handle focus', () => { 
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})