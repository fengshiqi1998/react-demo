import React, { Component } from 'react'
import store from './store';
console.log(store.getState())
// store 连接action和Reducer的一个对象
// action 是一个对象，描述state的变化
// Reducer 定义了如何响应action描述的state的变化，并发送到store
export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd = ()=>{
        let action = {type:'add',value:10}
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <p>
                    
                    Clicked: <span>{this.state.num}</span> times
                    <br/>
                    <button onClick={this.handleAdd}>+</button>
                    <button>-</button>
                    <br/>
                    <button>Increment if odd</button>
                    <button>Increment async</button>
                </p>
            </div>
        )
    }
}
