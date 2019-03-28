import React, { Component } from 'react';
import Comment from '../components/Comment';
import withSubscription from './withSubscription';
class CommentList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.data.map((item,index)=>(
                        <Comment comment={item} key={index}/>
                    ))
                }
                
            </ul>
        )
    }
}

export default withSubscription(CommentList,(ds)=>ds.getComments());