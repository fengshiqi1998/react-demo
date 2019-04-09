import React, { Component } from 'react'
import {add_todo,del_todo} from './actions/index';
import {connect} from 'react-redux';
import axios from 'axios';
import {fetch} from 'whatwg-fetch';
// class TodoList extends Component {
//     constructor(){
//         super();
//         // this.state = {
//         //     list:store.getState().list
//         // }
//         // store.subscribe(()=>{
//         //     this.setState({
//         //         list:store.getState().list
//         //     })
//         // })
//     }
//     handleAdd = (e)=>{
//         if(e.keyCode===13){
//             this.props.dispatch( add_todo(e.target.value) );
//         }
//     }
//     render() {
//         let {list} = this.props;
//         return (
//             <div>
//                 <input onKeyDown={this.handleAdd} type="text"/><br/>
//                 <ul>
//                     {
//                         list.map((item,index)=>(
//                             <li key={index}>{item}</li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

let TodoList = ({dispatch,list})=>{
    let handleAdd = (e)=>{
        if(e.keyCode===13){
            // fetch('https://api.apiopen.top/recommendPoetry')
            // .then(res=>res.json())
            // .then(res => {
            //     console.log(res);
            // })
            // axios.get('https://api.apiopen.top/recommendPoetry').then(res => {
            //     // console.log(res.data.result.content);
            //     let data= res.data.result.content;;
            //     dispatch( add_todo(data))
            // });
            // dispatch( add_todo(e.target.value) );
            dispatch(add_todo());
        }
    }
    let handleDel = (index)=>{
        dispatch( del_todo(index) )
    }
    return (
        <div>
            <input onKeyDown={handleAdd} type="text"/><br/>
            <ul>
                {
                    list.map((item,index)=>(
                        <li onClick={()=>handleDel(index)} key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}


let mapStateToProps = (state)=>{
    return {
        list:state
    }
}
export default connect(mapStateToProps)(TodoList);