import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class App extends Component{
    constructor() {
        super();
        this.state = {
            authors:'',
            content:'',
            title:''
        }
    }
    componentDidMount() {
        // get请求
        // axios.get('https://api.apiopen.top/recommendPoetry').then((res)=>{
        //     let {authors, content, title} = res.data.result;
        //     this.setState({
        //         authors ,content, title
        //     });
        //     console.log(this.state);
        // });

        // get请求传参，node中通过req.query获取
        // axios.get('/api/courses',{
        //     params: {
        //       id: 1
        //     }
        //   }).then(res=>console.log(res))
        
        // post请求，参数在node中通过req.body 获取
        // axios.post('/api',{name:11}).then(res=>console.log(res));

        // fetch 默认是get请求，返回的数据只是一个HTTP响应，需要通过json()函数转成json数据
        fetch('https://api.apiopen.top/recommendPoetry')
        .then((res) => {
            console.log(res);
            return res.json();
        }).then((res) => {
            console.log(res);
        });

        // fetch发送post请求
        // fetch('/api', {
        //     method: 'post',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "username":"tom",
        //         "passwd":"123456"
        //     })
        // }).then(res=>res.json()).then((res)=>{
        //     console.log(res);
        // }).catch(error => console.log('error is', error));
        
    }
    render(){
        return (
            <div>
                {/* <div>{this.state.title}</div>
                <div>{this.state.authors}</div>
                <div>{this.state.content}</div> */}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
