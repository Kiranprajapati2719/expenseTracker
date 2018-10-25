import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses ,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
  } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expenseData[id] = {description, note, amount, createdAt};
  });
   database.ref('expenses').set(expenseData).then(() => done());
});

test('Should setup remove expense action obj', () => {
  const action = removeExpense({ id: '123abc' });
  //Use toEqual for objects
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});
 
test('should remove expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('Should setup edit expense action obj', () => {
  const action = editExpense('123abc', { note: 'Test' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'Test'
    }
  });
});

test('Should edit expense from firebase', (done) =>{
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = {amount: 1234};  
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  })
});

test('Should setup add expense with data', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Rent',
    amount: 200,
    createdAt: 3000,
    note: 'Some text'
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('Should add expense with defaults to firebase and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  };
  store.dispatch(startAddExpense(expenseDefaults)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

test('Should setup setExpense action object with data' , () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
