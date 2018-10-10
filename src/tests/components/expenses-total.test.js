import getTotalExpense from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses', () => {
  const result = getTotalExpense([]);
  expect(result).toBe(0);
});

test('should correctly add up single expense', () => {
  const result = getTotalExpense([expenses[2]]);
  expect(result).toBe(7000);
});

test('should correctly add up multiple expenses', () => {
  const result = getTotalExpense(expenses);
  expect(result).toBe(24000);
});
