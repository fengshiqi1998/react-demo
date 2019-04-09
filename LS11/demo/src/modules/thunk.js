function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}
  
//   const thunk = createThunkMiddleware();
//   thunk.withExtraArgument = createThunkMiddleware;
const thunk = function(props) {
    var dispatch = props.dispatch;
    var getState = props.getState;
    return function(next) {
        return function(action) {
            return action(dispatch, getState);
        }
        return next(action);
    }
}
export default thunk;