import React, { Component } from 'react';
import Comment from '../components/Comment';
import withSubscription from './withSubscription';
import colorContext from '../context/colorContext';
class CommentList extends Component {
    render() {
        return (
            <colorContext.Consumer>
                {
                    (value)=>(
                        <ul style={{color:value}}>
                            {
                                this.props.data.map((item,index)=>(
                                    <Comment comment={item} key={index}/>
                                ))
                            }
                        </ul>
                    )
                }
            </colorContext.Consumer>
        )
    }
}

export default withSubscription(CommentList,(ds)=>ds.getComments());