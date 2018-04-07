import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from '../action.js'

import './foot.css'

class Foot extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            selectedAll: false
        }
    }
    handleSelectedAll = ()=>{
        // this.setState(prevState=>({
        //     selectedAll: !prevState.selectedAll
        // }))
        this.props.onSelectedAll()
    }
    handleConfirmProduct = ()=>{
        console.log('selected: ')
    }
    render(){
        let {selectedAll} = this.props
        return(
            <div className="product-footer">
                <div className="toggle-all">
                    <label className={`${selectedAll?'active':''}`} >
                        <input type="checkbox" defaultChecked="false" onClick={this.handleSelectedAll}/>
                    </label>
                    <span>全选</span>
                </div>
                <span className="confirm" onClick={this.handleConfirmProduct}>确定</span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onSelectedAll: ()=>dispatch(actions.selectAll()),
    }
}

export default connect(null, mapDispatchToProps)(Foot)