import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './features/welcome'

const title = process.env.REACT_APP_TITLE;
const footer_desc = process.env.REACT_APP_FOOTER_DESC;

ReactDOM.render(
    <Welcome title={title} copyright={footer_desc} />, document.getElementById('root')
);