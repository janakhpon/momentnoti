import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/src/notifications.scss';
import './assets/styles/app.scss';

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

