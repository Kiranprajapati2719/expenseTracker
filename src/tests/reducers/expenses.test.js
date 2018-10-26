import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
const state = expensesReducer(undefined, {type: '@@INIT'});
expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove expense if not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expense = {
    id: '100',
    description: 'Buy laptop',
    note:'',
    amount:2000,
    createdAt: 30000
  };

  const action = { type: 'ADD_EXPENSE', expense };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});


//should edit an expense
test('Should edit an expense', () => {
  const amount = 400;
  const action = {type: 'EDIT_EXPENSE', id:expenses[1].id, updates: {amount}};
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

//should not edit expense if not found

test('Should not edit an expense if not found', () => {
  const amount = 400;
  const action = {type: 'EDIT_EXPENSE', id:'-1', update: {amount}};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses' ,() => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});


