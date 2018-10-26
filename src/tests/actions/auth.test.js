import {login, logout, startLogin, startLogout} from '../../actions/auth'

test('should generate login action obj', () => {
  const uid = 'testid'
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action obj', () => {
  const id = 'testid'
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});

// test('should setup startLogin', () =>{

// });