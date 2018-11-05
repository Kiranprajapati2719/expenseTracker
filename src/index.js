import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { startSetExpenses } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import Loading from './components/Loading';
import './styles/main.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

ReactDOM.render(<Loading />, document.getElementById('root'));

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('root'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});