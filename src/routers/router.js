import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';

const AppRouter = () => (
  <Router>
    <div> 
      <h1>Expensify</h1>
      <NavLink to="/">
      Home
      </NavLink>
      <NavLink to="/create">Create Expense</NavLink>
    <hr/>
    <Route path="/" exact={true} render={() => <Dashboard/>} ></Route>
    <Route path="/create" render={(props) => <AddExpensePage {...props} />} ></Route>
    <Route path="/edit/:id" render={(props) => <EditExpensePage {...props} />} ></Route>
    </div>
  </Router>
);

export default AppRouter;