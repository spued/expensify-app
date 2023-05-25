import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from "history";

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path='/' component={ LoginPage } />
                <PrivateRoute path='/dashboard' component={ ExpenseDashboardPage } />
                <PrivateRoute path='/create' component={ AddExpensePage } />
                <PrivateRoute path='/edit/:id' component={ EditExpensePage } />
                <Route component={ NotFoundPage} />
            </Switch> 
        </div>
    </Router>
);

export default AppRouter;