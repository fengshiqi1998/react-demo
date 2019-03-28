import React, { Component } from 'react';
import store from './store';
export default class TodoList extends Component {
    constructor() {
        super();
        console.log(store.getState().todo);
        this.state = {
            list:store.getState().todo.list
        }
        store.subscribe(() => {
            this.setState({
                list:store.getState().todo.list
            })
        });
    }
    handleAdd = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        if(event.keyCode === 13) {
            let action = {type: 'add_item', value: event.target.value};
            store.dispatch(action);
            event.target.value = '';
        }
    }
    handleDec = (idx) => {
        console.log(idx);
        let action = {type: 'dec_item', value: idx};
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd} /><br />
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index} onClick={() => {this.handleDec(index)}}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
