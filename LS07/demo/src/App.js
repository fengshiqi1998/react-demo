import React, { Component } from 'react';
import CommentList from './hoc-components/commentList';
import AddComment from './components/AddComment';
// import BlogPost from './components/BlogPost';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
// 组件：UI组件（展示数据） 容器组件（请求数据，写逻辑）
//          components        containers
//          木偶组件            智能组件

// 评论列表
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">CommentList</Link></li>
            <li><Link to="/addComment?id=1">AddComment</Link></li>
          </ul>
          <Route exact path="/" component={CommentList} />
          <Route path="/addComment" component={AddComment} />
          {/* <CommentList />
          <AddComment />
          <BlogPost /> */}
        </div>
      </Router>
      
    );
  }
}
