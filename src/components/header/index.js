import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './index.css'

class PublicHeader extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        record: PropTypes.any
    }
    constructor(){
        super(...arguments)
        this.state={
            ToggleNav: false
        }
    }
    handleToggleNav = ()=>{
        this.setState(prevState=>({ToggleNav: !prevState.ToggleNav}))
    }
    render(){
        const {ToggleNav} = this.state
        const {title,record,confirm} = this.props
        return (
            <header className="app-header flex-ct">
                <span className="flex-item icon-menu" onClick={this.handleToggleNav}>menu</span>
                <span className="flex-item home">{title}</span>
                {
                    record && <NavLink to="/record" exact className="flex-item icon-record">记录</NavLink>
                }
                {
                    confirm && <NavLink to="/" exact className="flex-item icon-record">确定</NavLink>
                }
                <ReactCSSTransitionGroup transitionName="slide"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {
                        ToggleNav && <aside key='nav-slide' className="nav-slide-list" onClick={this.handleToggleNav}>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/balance">balance</NavLink>
                            <NavLink className="nav-link" to="/helpCenter">help</NavLink>
                        </aside>
                    }
                </ReactCSSTransitionGroup>
            </header>
        )

    }
}

export default PublicHeader