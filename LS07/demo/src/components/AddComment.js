import React, { Component } from 'react';
import DateSource from '../ds/DateSource';
import colorContext from '../context/colorContext';
import url from 'url';
export default class AddComment extends Component {
    componentDidMount() {
        console.log(url.parse(this.props.location.search, true));
    }
    render() {
        return (
            <div>
                <input type="text" ref={inp=>this.inp=inp}/>
                <colorContext.Consumer>
                    {
                        (value)=>(<button style={{color: value}} onClick={()=>DateSource.addComment(this.inp.value)}>
                            添加评论
                        </button>)
                    }
                </colorContext.Consumer>
                {/* <button style={{color: value}} onClick={()=>DateSource.addComment(this.inp.value)}>
                            添加评论
                        </button> */}
            </div>
        )
    }
}
