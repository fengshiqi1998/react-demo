import axios from 'axios';
import {ADD_TODO_ITEM,DEL_TODO_ITEM} from './ActionTypes';
// export const add_todo = (value)=>({type:ADD_TODO_ITEM,value:value})
export const del_todo = (index)=>({type:DEL_TODO_ITEM,index:index});
export const add_todo = () => {
    return (dispatch) => {
        axios.get('https://api.apiopen.top/recommendPoetry')
        .then(res => {
            let data = res.data.result.content;
            return dispatch({type: ADD_TODO_ITEM, value: data});
        });
    }
}