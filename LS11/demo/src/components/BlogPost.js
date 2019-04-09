import React, { Component } from 'react';
import Comment from './Comment';
import DateSource from '../ds/DateSource';
export default class BlogPost extends Component {
    constructor(){
        super();
        this.state = {
            comments:DateSource.getBlogPost()
        }
    }
    componentDidMount() {
        DateSource.addChangeListener(this.handleChange);
    }
    handleChange = ()=>{
        this.setState({
            comments:DateSource.getBlogPost()
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.comments.map((item,index)=>(
                        <Comment comment={item} key={index}/>
                    ))
                }
                
            </ul>
        )
    }
}
