import filtersReducer from  '../../reducers/filters';
import moment from 'moment';

test('Should set default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });  
});

test('Should set sort by to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toEqual('amount');  
});

test('Should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };

  const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
  expect(state.sortBy).toEqual('date');  
});

// should set text filtersReducer, start Date, end date

test('Should set text filter with given value', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Hello'}) 
  expect(state.text).toBe('Hello');
});

test('Should set start date with given value', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
  expect(state.startDate).toEqual(startDate);
});

test('Should set end date with given value', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
  expect(state.endDate).toEqual(endDate);
});
