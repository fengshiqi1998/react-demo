import React, { Component } from 'react';
import store from './store';
export default class TodoList extends Component {
    constructor() {
        super();
        console.log(store.getState());
        this.state = {
            list:store.getState().list
        }
        store.subscribe(() => {
            this.setState({
                list:store.getState().list
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
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd} /><br />
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
