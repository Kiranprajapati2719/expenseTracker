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
  const uid = 'testid';
  const currentState = authReducer(undefined, {type: 'LOGIN', uid});
  const state = authReducer(currentState, {type: 'LOGOUT'});
  expect(state).toEqual({});
});