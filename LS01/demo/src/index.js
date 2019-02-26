import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const num = 100;
// const str = 'hello react!';
// const ele = <h1 id="title" className="tit">{str} {num}</h1>;
// console.log(ele);
/*
let obj = {
    type: 'h1',
    props: {// propers
        id: 'title',
        className: 'tit',// class
        children: [
            'hello world',
            ' ',
            'hello react',
            {
                type: 'p',
                props: {
                    id: 'box',
                    children: [
                        'Happy Spring Festival Day'
                    ]
                }
            }
        ]
    }
}
function render(obj, container) {
    let {type, props} = obj;
    var ele = document.createElement(type);
    Object.keys(props).forEach((key) => {
        // console.log(key);
        if(key ==='className') {
            ele.className = props[key];// 等价 ele.setAttribute('class',props[item]);
        } else if(key === 'children') {
            props[key].forEach(item => {
                console.log(item);
                if(typeof item === 'object') {
                    render(item, ele);
                } else {
                    let txtNode = document.createTextNode(item);
                    ele.appendChild(txtNode);
                }
            });
        } else {
            ele[key] = props[key];
        }
    })
    container.appendChild(ele);
}
render(obj, document.getElementById('root'));
*/
function tick() {
    const ele = (<div>
        <p>{new Date().toLocaleString()}</p>
        <p>clock</p>
    </div>);
    ReactDOM.render(ele, document.getElementById('root'));
}
setInterval(tick, 1000);

// ReactDOM.render(<App />, document.getElementById('root'));

// let ele = React.createElement('h1', {id: 'title', className: 'tit'}, ['hello']);// 标签 属性 子元素
// ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
