import React, { Component } from 'react';
// import store from './store';
import {add_todo, del_todo} from './actions';
import {connect} from 'react-redux';
// class TodoList extends Component {
//     constructor() {
//         super();
//     }
//     handleAdd = (event) => {
//         if(event.keyCode === 13) {
//             this.props.dispatch(add_todo(event.target.value));
//             event.target.value = '';
//         }
//     }
//     // handleDec = (idx) => {
//     //     console.log(idx);
//     //     let action = {type: 'dec_item', value: idx};
//     //     store.dispatch(action);
//     // }
//     render() {
//         let {list} = this.props;
//         return (
//             <div>
//                 <input type="text" onKeyDown={this.handleAdd} /><br />
//                 <ul>
//                     {
//                         list.map((item, index) => (
//                             // <li key={index} onClick={() => {this.handleDec(index)}}>{item}</li>
//                             <li key={index}>{item}</li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

let TodoList = ({dispatch, list}) => {
    let handleAdd = (event) => {
        if(event.keyCode === 13) {
            dispatch(add_todo(event.target.value));
            event.target.value = '';
        }
    }
    let handleDec = (idx) => {
        console.log(idx);
        dispatch(del_todo(idx));
    }
    return (
        <div>
            <input type="text" onKeyDown={handleAdd} /><br />
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index} onClick={() => {handleDec(index)}}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps) (TodoList);
// export default TodoList;