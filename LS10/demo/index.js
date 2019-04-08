import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
// import Counter from './Counter';
import ToDoList from './todoList';
ReactDOM.render(
    <div style={{padding: '30px'}}>
        {/* <Counter /> */}
        <Provider store={store}>
            <ToDoList />
        </Provider>
    </div>,
    document.getElementById('root')
);

