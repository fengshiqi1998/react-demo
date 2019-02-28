import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
function App(props) {
    console.log(props);
    // return <h1>React</h1>;
    return <Hello name="world" />;
}
*/
let num = 100;

function Hello(props){
    return <div>hello {props.name}</div>;
}

ReactDOM.render(<App wd={num} />, document.getElementById('root'));