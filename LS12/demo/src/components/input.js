import React, { Component } from 'react';

export default class Input extends Component {
    handleAdd = (e) => {
        if(e.keyCode===13){
            this.props.add_todo(e.target.value);
        }
    }
    render() {
        console.log(this.props)
        return(
            <input onKeyDown={this.handleAdd} type="text"/>
        );
    }
}