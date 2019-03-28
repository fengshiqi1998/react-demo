import React, { Component } from 'react';
import store from './store';
export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            num: store.getState()
        };
        store.subscribe(() => {
            this.setState({
                num: store.getState()
            });
        });
    }
    handleAdd = () => {
        let action = {type: 'add'};
        store.dispatch(action);
        console.log(store.getState());
    }
    handleDec = () => {
        let action = {type: 'dec'};
        store.dispatch(action);
        console.log(store.getState());
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br />
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <br />
                    <button>Increment if odd</button>
                    <button>Increment async</button>
                </p>
            </div>
        );
    }
}
