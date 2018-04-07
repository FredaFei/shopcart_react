import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Request from 'common/js/request/request'
import './recordList.css'

class RecordList extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            recordData: []
        }
    }
    getRecord = async type=>{
        try{
            let result = await Request.getRecordList({type});
            this.setState({recordData: result || []})
        }catch(err){
            console.log(err)
        }
    }
    componentWillReciveProps(nextProps){
        let currentType = this.props.location.pathname.split('/')[2]
        let type = nextProps.location.pathname.split('/')[2]
        if(currentType !== type){
            this.getRecord(type)
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps !== nextState
    }
    componentWillMount(){
        let type = this.props.location.pathname.split('/')[2];
        this.getRecord(type);
    }
    render(){
        let {recordData} = this.state
        return (
            <ul className="record-list">
                {
                    recordData.map(item=>{
                        return <li className="record-item" key={item.username}>
                            <section className="record-item-head">
                                <span className="time">创建时间：{item.time}</span>
                                <span className="status">已通过</span>
                            </section>
                            <section className="record-item-content">
                                <div className="user-name"><span>用户名：{item.username}</span></div>
                                <div className="product-name"><span>商 品：{item.productName}</span></div>
                                <div className="amount"><span>金 额：{item.amount} </span><span>佣金：{item.award}</span></div>
                            </section>
                            <section className="record-item-foot">等待管理员审核，审核通过后，佣金将结算至账户</section>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default RecordList