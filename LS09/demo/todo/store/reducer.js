
let initValue = {
    // list: [1,2,3]
    list: []
}
export default (state=initValue, action) => {
    switch(action.type) {
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state));
            // var obj = Object.assign({}, state, {a: 100});
            newState.list.push(action.value);
            return newState;
        default:
            return state;
    }
}