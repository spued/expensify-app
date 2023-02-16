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

const state = store.getState();

const jsx =  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx);
