import React from 'react';
import {Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from  './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../components/Dashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path="/" exact component={ LoginPage}/>
        <PrivateRoute path="/dashboard" component={ Dashboard}/>
        <PrivateRoute path="/create" component={ AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={ EditExpensePage}/>
      </Switch>
  </Router>
); 

export default AppRouter;