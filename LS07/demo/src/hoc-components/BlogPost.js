import React, { Component } from 'react';
import Comment from '../components/Comment';
import withSubscription from './withSubscription'
class BlogPost extends Component {
    render() {
        return (
            <ul>
                {/* {
                    this.props.data.map((item,index)=>(
                        <Comment comment={item} key={index}/>
                    ))
                } */}
                <Comment comment={this.props.data}/>
                {/* <div>{this.props.data.msg}</div> */}
                
            </ul>
        )
    }
}
export default withSubscription(BlogPost,(ds,id)=>ds.getBlogById(id));