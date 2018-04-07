import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import PublicHeader from 'components/header/index.js'
// import Request from '../../common/js/request/request'

class Home extends Component{
    constructor(){
        super(...arguments)
        this.state = {}
    }
    componentDidMount(){
        // let data = {name: 'uu',telphone: 13600000001}
        // Request.helpPersonal(data).then(res=>{
        //     console.log(res)
        // },err=>{
        //     console.log(err)
        // })
    }
    render(){
        return (
            <div className="home-wrap">
                <PublicHeader title="首页" record />
                <main className="home-content">
                    <div className="form-content">
                        <h1 className="title">请输入您的信息</h1>
                        <ul className="form-list">
                            <li className="form-item">
                                <label className="name">销售金额：</label>
                                <input type="number" placeholder="请输入金额"/>
                            </li>
                            <li className="form-item">
                                <label className="name">客户姓名：</label>
                                <input type="text" placeholder="请输入金额"/>
                            </li>
                            <li className="form-item">
                                <label className="name">客户电话：</label>
                                <input type="number" placeholder="请输入金额"/>
                            </li>
                        </ul>
                        <div className="form-cell">
                            <h1 className="title">请选择销售产品</h1>
                            <Link to="/product" className="name">
                                {
                                    <ul>
                                        {/*<li>ccc</li>*/}
                                    </ul>
                                }
                                选择产品
                            </Link>
                        </div>
                        <div className="form-cell">
                        <h1 className="title">请上传发票凭证</h1>
                            <p className="name">上传图片</p>
                            <input className="file" type="file" placeholder="上传图片"/>
                        </div>
                    </div>
                </main>
                <div className="foot">
                    <button className="btn">提交</button>
                </div>
            </div>
        )

    }
}

export default Home