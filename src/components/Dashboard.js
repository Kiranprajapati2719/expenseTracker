import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const Dashboard = () => (
  <>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesSummary />
  </>
);

export default Dashboard;