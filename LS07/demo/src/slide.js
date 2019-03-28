import React, { Component } from 'react';
import './index.css';

export default class Slide extends Component {
    render() {
        let style = {
            width: -800*(this.props.imgs.length+1),
            left: -800*this.props.index
        }
        return (
            <ul style={style} ref={(ul) => this.ul = ul} className="slides">
                {
                    this.props.imgs.map((item, index) => {
                        return <li><img src={item} alt="" /></li>;
                    })
                }
                <li><img src={this.props.imgs[0]} alt="" /></li>
            </ul>
        );
    }
}
