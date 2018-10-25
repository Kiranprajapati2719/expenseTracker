import database from '../firebase/firebase';

//add expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return async (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    const ref = await database.ref('expenses').push(expense);
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }));
  };
};

//remove expense

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//start remove expense
export const startRemoveExpense = ({id} = {}) => {
  return async (dispatch) => {
    await database.ref(`expenses/${id}`).remove();
    dispatch(removeExpense({ id }));
  }
}; 

//edit expense

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
}); 

//startEditExpense
export const startEditExpense = (id, updates) => {
  return async (dispatch) => {
    await database.ref(`expenses/${id}`).update(updates).then(() => {
    dispatch(editExpense(id, updates));
    });
  }
};

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = (expenseData = {}) => {
  return async (dispatch) => {
    const snapshot = await database.ref('expenses').once('value');
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    dispatch(setExpenses(expenses));
  }
};