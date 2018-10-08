import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action obj', () => {
  const action = removeExpense({id:'123abc'});
  //Use toEqual for objects
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abc'
  });
});

test('Should setup edit expense action obj', () => {
  const action = editExpense('123abc', {note: 'Test'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    update: {
      note:'Test'
    }
  });
});

test('Should setup add expense with data', () => {
  const expenseData = {
    description: 'Test',
    amount:4900,
    createdAt: 30000,
    note:'Test note'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)      
    }
  });
});

test('Should setup add expense with default data', () => {
  const action = addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)      
    }
  });
});
