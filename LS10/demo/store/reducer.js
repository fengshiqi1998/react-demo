import {ADD_TODO_ITEM, DEL_TODO_ITEM} from '../actions/action-test';

let initValue = {
    list: [1, 2, 3]
}

export default (state = initValue, action) => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return [...state, action.value];
            // let addState = JSON.parse(JSON.stringify(state));
            // addState.list.push(action.value);
            // return addState;
        case DEL_TODO_ITEM:
            let delState = JSON.parse(JSON.stringify(state));
            delState.list.splice(action.index, 1);
            return delState;
        default:
            // let defaultState = JSON.parse(JSON.stringify(state));
            // return defaultState;
            return state;
    }
}