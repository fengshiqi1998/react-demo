import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    componentDidMount() {
        console.log(this.ul);
        setInterval(() => {
            if(this.state.index>=5) {
                this.ul.style.transitionDuration = '0s';
                this.ul.style.left = 0;
                setTimeout(() => {
                    this.ul.style.transitionDuration = '1s';
                    this.setState({
                        index: 1
                    });
                }, 0);
                return ;
            }
            this.setState({
                index: this.state.index+1
            });
            // if(this.state.index === 5) {
            //     this.setState({
            //         index: 0
            //     });
            // }   
        }, 2000);
    }
    render() {
        let style = {
            left: -800*this.state.index
        }
        return (
            // <div className="wrap">
            <div className="box">
                <ul style={style} ref={(ul) => this.ul = ul} className="slides">
                    <li><img src={require('./images/banner01.jpg')} alt="" /></li>
                    <li><img src={require('./images/banner02.jpg')} alt="" /></li>
                    <li><img src={require('./images/banner03.jpg')} alt="" /></li>
                    <li><img src={require('./images/banner04.jpg')} alt="" /></li>
                    <li><img src={require('./images/banner05.jpg')} alt="" /></li>
                    <li><img src={require('./images/banner01.jpg')} alt="" /></li>
                </ul>
                <ul className="dots">
                    <li className={this.state.index === 0?'active':''}>1</li>
                    <li className={this.state.index === 1?'active':''}></li>
                    <li className={this.state.index === 2?'active':''}></li>
                    <li className={this.state.index === 3?'active':''}></li>
                    <li className={this.state.index === 4?'active':''}></li>
                </ul>
            </div>
            // </div>
        );
    }
}




ReactDOM.render(<Carousel />, document.getElementById('root'));
