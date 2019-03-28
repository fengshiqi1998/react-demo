import React, { Component } from 'react';
import store from './store';
// store 连接action和reducer的一个对象
// 
// 
export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            num: store.getState().counter
        };
        store.subscribe(() => {
            this.setState({
                num: store.getState().counter
            });
        });
    }
    handleAdd = () => {
        let action = {type: 'add', value: 1};
        // console.log(action);
        store.dispatch(action);
        console.log(store.getState().counter);
    }
    handleDec = () => {
        let action = {type: 'dec'};
        store.dispatch(action);
        console.log(store.getState().counter);
    }
    handleIfOdd = () => {
        if(store.getState().counter%2 !==0) {
            let action = {type: 'add', value: 1};
            store.dispatch(action);

        }
        // console.log(action);
        // console.log(store.getState().counter);
    }
    handleAsync = () => {
        let action = {type: 'add', value: 1};
        setTimeout(() => {
            store.dispatch(action);
        }, 1000);
        // console.log(action);
        // console.log(store.getState().counter);
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
                    <button onClick={this.handleIfOdd}>Increment if odd</button>
                    <button onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}
