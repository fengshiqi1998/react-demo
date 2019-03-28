import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Antd from './antd';
// import './antd.css';
import { HashRouter as Router} from "react-router-dom";
// import App from './App';
// import colorContext from './context/colorContext';
// import {HashRouter as Router, Route, Link} from 'react-router-dom';
// class Theme extends Component {
//     constructor() {
//         super();
//         this.state = {
//             value: 'red'
//         }
//     }
//     changeColor = () => {
//         this.setState({
//             value: 'green'
//         })
//     }
//     render(){
//         // return (
//         //     ReactDOM.createPortal(
//         //         <div>
//         //             <colorContext.Provider value = {this.state.value}>
//         //                 <App />
//         //             </colorContext.Provider>
//         //             <button onClick={this.changeColor}>changeColor</button>
//         //         </div>,
//         //         document.querySelector('#app')
//         //     )
//         // )
//         return (
//             <div>
//                 <colorContext.Provider value = {this.state.value}>
//                     <App />
//                 </colorContext.Provider>
//                 <button onClick={this.changeColor}>changeColor</button>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <Router>
        <Antd />
    </Router>,
    document.getElementById('root'));
