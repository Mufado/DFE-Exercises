import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './features/welcome'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchTextReducer } from './redux/reducer';

const title = process.env.REACT_APP_TITLE;
const footer_desc = process.env.REACT_APP_FOOTER_DESC;
const store = createStore(searchTextReducer);

ReactDOM.render(
  <Provider store={store}>
    <Welcome title={title} copyright={footer_desc} />
  </Provider>,
  document.getElementById('root')
);