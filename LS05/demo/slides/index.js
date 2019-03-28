import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dots from './dots';
import Slide from './slide';

class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    move = () => {
        if(this.state.index>=5) {
            this.ul.ul.style.transitionDuration = '0s';
            this.ul.ul.style.left = 0;
            setTimeout(() => {
                this.ul.ul.style.transitionDuration = '1s';
                this.setState({
                    index: 1
                });
            }, 0);
            return ;
        }
        this.setState({
            index: this.state.index+1
        });
    }
    leftClick = () => {
        if(this.state.index<=0) {
            this.ul.ul.style.transitionDuration = '0s';
            this.ul.ul.style.left = -4000 + 'px';
            setTimeout(() => {
                this.ul.ul.style.transitionDuration = '1s';
                this.setState({
                    index: 4
                });
            }, 0);
            return ;
        }
        this.setState({
            index: this.state.index-1
        });
    }
    componentDidMount() {
        console.log(this.ul.ul);
        this.timer = setInterval(this.move, 2000);
    }
    handleOver = () => {
        clearInterval(this.timer);
    }
    handleOut = () => {
        this.timer = setInterval(this.move, 2000);
    }
    handleClick = (idx) => {
        this.setState({
            index: idx
        });
    }
    render() {
        return (
            <div className="box" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                <Slide ref={(ul) => this.ul = ul} index={this.state.index} imgs={this.props.imgs} />
                <Dots handleClick={this.handleClick} imgs={this.props.imgs} index={this.state.index} />
                <ul className="arrow">
                    <li onClick={this.leftClick} className="arrow-left">&lt;</li>
                    <li onClick={()=>this.move()} className="arrow-right">&gt;</li>
                </ul>
            </div>
        );
    }
    
}

let imgs = [
    require('./images/banner01.jpg'),
    require('./images/banner02.jpg'),
    require('./images/banner03.jpg'),
    require('./images/banner04.jpg'),
    require('./images/banner05.jpg')
];

ReactDOM.render(<Carousel imgs={imgs} />, document.getElementById('root'));
