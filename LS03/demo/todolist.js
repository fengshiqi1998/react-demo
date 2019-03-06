import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: 'hello',
            isClick: true,
            list: []
        }
    }
    // componentDidMount = () => {// 生命周期，页面加载完后的操作
    //     this.inp.focus();// focus为聚焦函数，一般由onFocus事件触发
    // }
    // 受控组件必须写事件处理函数
    handleChange = (e) => {// 事件处理函数
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        });
    }
    handleClick = () => {
        // let li = this.state.list;
        // li.push(this.state.inputValue);
        this.setState({
            isClick: !this.state.isClick,
            list: [...this.state.list,this.state.inputValue]// 展开运算符
        })
    }
    render() {
        let style = {
            width: 100,
            height: '100px',
            backgroundColor: '#ccc'
        }
        return (
            // 受控组件
            <div>
                {this.props.children}
                <label htmlFor="inp">请输入代办事项</label>{/*label标签的作用为扩大点击范围，for的值为input的id值，两者进行关联*/}
                <input id='inp' onChange={this.handleChange} type="text" value={this.state.inputValue} />{/*受控组件，value和state相关联，安全性高 */}
                {/* 原生js中的onChange事件需要value改变且失去焦点时才会触发，
                    react中的onChange和原生js中的oninput效果相同
                 */}
                <button className={this.state.isClick?'red':'gray'} onClick={this.handleClick}>submit</button>
                <ul style={style}>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>;
                            // return <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}


