import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
  const formattedTotal = numeral(expensesTotal / 100).format('$0, 0.00') 
  
  return(
  <div>
    <h4> Viewing {expenseCount} {expenseWord} totalling {formattedTotal}
    </h4>
  </div>  
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);

