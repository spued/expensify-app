import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize-css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const ReactDOM = createRoot(document.getElementById('app'));

const jsx =  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>)

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx);
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('login : uid = ', user.uid , history.location.pathname);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        })
    } else {
        store.dispatch(logout());
        renderApp();
        console.log('logged out');
        history.push('/');
    }
});
