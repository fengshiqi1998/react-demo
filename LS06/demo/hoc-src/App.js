import React, { Component } from 'react'
import CommentList from './hoc-components/CommentList';
import AddComment from './components/AddComment';
import BlogPost from './hoc-components/BlogPost';
// 组件：UI组件（展示数据）和容器组件（请求数据，写逻辑）
// 木偶组件和智能组件
// components // containers
export default class App extends Component {
    render() {
        return (
            <div>
                <CommentList list="hello" />
                <AddComment />
                <BlogPost id={2}/>
            </div>
        )
    }
}
