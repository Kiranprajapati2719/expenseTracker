import authReducer from '../../reducers/auth';

test('Should set default state', () => {
  const state = authReducer(undefined, {type: '@@INIT'}); 
  expect(state).toEqual({});
});

test('Should set login', () => {
  const uid = 'testid';
  const state = authReducer(undefined, {type: 'LOGIN', uid});
  expect(state).toEqual({uid});
});

test('Should set logout', () => {
  const state = authReducer({uid: '123abc'}, {type: 'LOGOUT'});
  expect(state).toEqual({});
});