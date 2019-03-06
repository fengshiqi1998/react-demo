import React, { Component } from 'react';

export default class Controlled extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: 'hello',
            isClick: true
        }
    }
    componentDidMount = () => {// 生命周期，页面加载完后的操作
        this.inp.focus();// focus为聚焦函数，一般由onFocus事件触发
        // this.refs.a.focus();
    }
    // 受控组件必须写事件处理函数
    handleChange = (e) => {// 事件处理函数
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value,
        });
    }
    handleClick = () => {
        console.log(this);// 箭头函数的this指向大类Controlled
        console.log(this.inp.value);
        this.setState({
            isClick: !this.state.isClick
        })
    }
    render() {
        let ele = '<h1>hello</h1>';
        return (
            // 受控组件
            // <div>
            //     <input defaultValue='hello' onChange={this.handleChange} type="text" value={this.state.inputValue} />{/*受控组件，value和state相关联，安全性高 */}
            //     {/* 原生js中的onChange事件需要value改变且失去焦点时才会触发，
            //         react中的onChange和原生js中的oninput效果相同
            //      */}
            // </div>

            // 非受控组件
            <div>
                <div dangerouslySetInnerHTML={{__html:ele}}></div>
                <label htmlFor="inp">用户名：</label>{/*label标签的作用为扩大点击范围，for的值为input的id值，两者进行关联*/}
                <input id="inp" ref={(inp) => {this.inp = inp}} defaultValue='hi~' />
                <button className={this.state.isClick?'red':'gray'} onClick={this.handleClick}>submit</button>
                {/* <input ref='a' defaultValue='hi~' />
                    <button ref='b' onClick={this.handleClick}>submit</button>
                    每个class中都有refs属性，可以通过它进行标签控制，但是不推荐
                */}
            </div>
        );
    }
}


