import React from 'react';
import ReactDOM from 'react-dom';
// import Types from './Types';
// import Controlled from './Controlled';
import TodoList from './todolist'
import './index.css';
// ReactDOM.render(<Types />, document.getElementById('root'));
// ReactDOM.render(<Controlled bgcolor="btn" />, document.getElementById('root'));
ReactDOM.render(<TodoList><h1>title</h1></TodoList>, document.getElementById('root'));// 也可以传入函数、字符串等任意值