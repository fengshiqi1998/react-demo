import React, { Component } from 'react';

export default class Dots extends Component {
    render() {
        return (
            <ul className="dots">
                {
                this.props.imgs.map((item, index) =>
                    <li onClick={()=>{this.props.handleClick(index)}} className={this.props.index === index || (this.props.index === this.props.imgs.length && index === 0)?'active':''}>
                        {index+1}
                    </li>
                )}
            </ul>
        );
    }
}
