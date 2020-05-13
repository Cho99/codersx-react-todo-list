import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const todos = [
  'Go to market',
  'Buy food',
  'Make dinner'
];

const Items = todos.map(x => <li>{x}</li>);
const Todos = <ul>{Items}</ul>;

ReactDOM.render(
  Todos,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
