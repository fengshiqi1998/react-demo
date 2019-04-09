import {ADD_TODO_ITEM,DEL_TODO_ITEM} from '../actions/ActionTypes'
let initValue = [1,2,3];
export default (state=initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            return [...state,action.value];
        case DEL_TODO_ITEM:
            return state.filter((item,index)=>{
                return index !== action.index;
            });
        default :
            return state;
    }
}








// import {combineReducers} from 'redux';
// let counter = (state=12,action)=>{
//     switch(action.type){
//         case 'add':
//             return state+action.value;
//         case 'dec':
//             return state-1;
//         default :
//             return state;
//     }
// }
// let initValue = {
//     list:[1,2,3]
// }
// let todo = (state=initValue,action)=>{
//     switch(action.type){
//         case 'add_item':
//             let newState = JSON.parse(JSON.stringify(state));
//             newState.list.push(action.value);
//             return newState;
//         default :
//             return state;
//     }
// }
// export default combineReducers({
//     counter,todo
// })