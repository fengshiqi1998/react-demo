import React,{Component} from 'react';
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

        axios.get('https://api.apiopen.top/recommendPoetry').then((res)=>{
            let {authors, content, title} = res.data.result;
            this.setState({
                authors ,content, title
            });
        })


        // get请求传参，node中通过req.query获取

        // axios.get('/api/courses',{
        //     params: {
        //       id: 1
        //     }
        //   }).then(res=>console.log(res))


        // post请求，参数在node中通过req.body 获取

        // axios.post('/api',{name:11}).then(res=>console.log(res));

        
    }
    render(){
        return (
            <div>axios 请求</div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);