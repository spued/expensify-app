import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize-css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const ReactDOM = createRoot(document.getElementById('app'));

/* const subscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
}) */

store.dispatch(addExpense({
    description : 'Water bill',
    amount : 1000,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description : 'Gas bill',
    amount : 3500,
    createdAt: 2000
}));

store.dispatch(addExpense({
    description : 'Rent',
    amount : 15000,
    createdAt: 1500
}));

/* store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000); */

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx =  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx);
