import database from '../firebase/firebase';

//add expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

//remove expense

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//edit expense

export const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
}); 

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = (expenseData = {}) => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      })
      dispatch(setExpenses(expenses));
    });
  }
};