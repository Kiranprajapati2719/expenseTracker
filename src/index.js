import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/router';
import {Provider} from 'react-redux';                                
import configureStore from  './store/store';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
 
const App = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));