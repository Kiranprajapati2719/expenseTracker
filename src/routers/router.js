import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header/>
    <Switch>
      <Route path="/" exact = {true} render={() => <LoginPage/>}/>
      <Route path="/dashboard" render={() => <Dashboard/>}/>
      <Route path="/create" render={(props) => <AddExpensePage {...props} />}/>
      <Route path="/edit/:id" render={(props) => <EditExpensePage {...props} />}/>
    </Switch>
    </div>
  </Router>
);

export default AppRouter;