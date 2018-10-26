import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
    <h1>Expensify</h1>
        <NavLink to="/dashboard"> Home </NavLink>
        <NavLink to="/create">Create Expense</NavLink>
        <button onClick = {startLogout}>Log out</button>
    <hr/>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);