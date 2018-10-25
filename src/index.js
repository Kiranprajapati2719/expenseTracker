import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { setStartDate } from './actions/filters';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
 
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));  
});
