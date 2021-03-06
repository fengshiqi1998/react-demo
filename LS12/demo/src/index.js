import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import TodoList from './todoList';
import { Provider } from 'react-redux';
import store from './store';




ReactDOM.render(
        <Provider store={store}>
            <TodoList />
        </Provider>,
    document.getElementById('root')
);


