import React, { Fragment } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from './actions/index';
import Input from './components/input';
console.log(ActionCreators);
let TodoList = ({dispatch,list})=>{
    let bindActions = bindActionCreators(ActionCreators, dispatch);
    console.log(bindActions);
    let handleDel = (index)=>{
        // dispatch( del_todo(index) )
    }
    return (
        <Fragment>
            <Input add_todo={bindActions.add_todo} />
            <ul>
                {
                    list.map((item,index)=>(
                        <li onClick={()=>handleDel(index)} key={index}>{item}</li>
                    ))
                }
            </ul>
        </Fragment>
    )
}


let mapStateToProps = (state)=>{
    return {
        list:state
    }
}
export default connect(mapStateToProps)(TodoList);