import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test ('Should set the default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test ('Should set sort by amount', () => {
    const state = filtersReducer(undefined, { type : 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('Should set the sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE'};

    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toEqual('date');
});

test('Should set the text filter', () => {
    const action = { 
        type: 'SET_FILTER_TEXT',
        text: '1234ABCD'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toEqual('1234ABCD');
})

test('Should see the start date filter', () => {
    const action = { 
        type: 'SET_START_DATE',
        date : moment().startOf('month')
    };

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment().startOf('month'));
})

test('Should see the end date filter', () => {
    const action = { 
        type: 'SET_END_DATE',
        date : moment().endOf('month')
    };

    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment().endOf('month'));
})