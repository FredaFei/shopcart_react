import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import PublicHeader from '@/components/header/index.js'
import RecordList from './components/recordList.jsx'
import './index.css'

class Record extends Component{
    state = {
        flagBarPos: '12%'
    }
    componentDidMount(){
    }
    setFlagBarPos = (type)=>{
        let flagBarPos;
        switch(type){
            case 'passed':
                flagBarPos = '11%';
            break;
            case 'audited':
                flagBarPos = '44%';
            break;
            case 'failed':
                flagBarPos = '78%';
            break;
            default:
                flagBarPos = '11%';    
        }
        this.setState({flagBarPos})
    }
    componentWillReceiveProps(nextProps){
        console.log(this.props)
        let currentType = this.props.location.pathname.split('/')[2]
        let type = nextProps.location.pathname.split('/')[2]
        if(currentType !== type){
            this.setFlagBarPos(type)
        }
    }
    conponentWillMount(){
        let type = this.props.location.pathname.split('/')[2]
        this.setFlagBarPos(type)
    }
    render(){
        return (
            <div className="home-wrap">
                <PublicHeader title="记录" />
                <main className="record-content">
                    <section className="tab-nav">
                        <nav className="record-menu">
                            <NavLink to={`${this.props.match.path}/passed`} className="record-nav-link">已通过</NavLink>
                            <NavLink to={`${this.props.match.path}/audited`} className="record-nav-link">待审核</NavLink>
                            <NavLink to={`${this.props.match.path}/failed`} className="record-nav-link">未通过</NavLink>
                        </nav>
                        <i className="nav-flag-bar" style={{left: this.state.flagBarPos}}></i>
                    </section>
                    <Switch>
                        <Route path={`${this.props.match.path}/:type`} component={RecordList} />
                        <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/passed`} exact component={RecordList} />
                    </Switch>
                </main>
            </div>
        )

    }
}

export default Record