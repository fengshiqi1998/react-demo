import React,{Fragment, Component} from 'react';
//export default class App extends Component {
class App extends Component {// class
  constructor(props) {
    super(props);// inherit this
    console.log(this.props);
    this.state = {// state can reset values in state
        course: 'react',
        time: new Date().toLocaleString()
    };
    // this.handleClick = this.handleClick.bind(this);// bind this from class to function
  }
  /*
  componentDidMount() {
    console.log('componentdidmount');
    setInterval(() => {
      this.setState({// set state and render will be rewritten
          time: new Date().toLocaleString()
      });
    }, 1000);
  }
  */
  /*
  static getDerivedStateFromProps(nextProps, preState) {
    console.log('getDerivedStateFromProps');
  }
  */
 /*
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldcomponentupdate');
    // if(nextProps.a === this.props.a) {
      return true;
    // }
  }
  */
 /*
  getSnapshotBeforeUpdate() {
    console.log('getsnapshoteforeupdate');
    return 1;
  }
  */
  /*
  componentDidUpdate(prevProps, prevState, a) {
    console.log('componentdidupdate');
  }
  */
  // handleClick() {
  handleClick = (id, e) => {
    console.log(id, e);
    setInterval(() => {
      this.setState({// set state and render will be rewritten
          time: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {// function  return result usually
    // console.log(this.props);//class's props needs to add this
    console.log('render');
    /*
    <p>{this.props.wd}</p>
    <p>{this.state.course}</p>
    <Hello name="react" />
    </Fragment>);
    */
    return (//Fragment needs to be introduced
       <Fragment>
          <h1>{this.state.time}</h1>
          {/* <button onClick={this.handleClick.bind(this, 100)}>start</button> bind every time when running*/}
          <button onClick={(e) => {this.handleClick(200, e)}}>start</button>
      </Fragment>
    );
  }
}
export default App;