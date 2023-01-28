import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters'

test ('I want to test the set start date for filter', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)}
    );
});
test ('I want to test the set end date for filter', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)}
    );
});

test ('I want to test the set sort by date for filter', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test ('I want to test the set sort by amount for filter', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test ('I want to test the set provided text for filter', () => {
    const action = setTextFilter( 'test');
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: 'test'
    });
});
test ('I want to test the set default text for filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: ''
    });
});