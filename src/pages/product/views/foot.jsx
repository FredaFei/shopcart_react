import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from '../action.js'

import './foot.css'

class ProductFoot extends Component{
    state = {
        selectedAll: false,
        optionsCheckedList: []
    }
    componentWillReceiveProps(nextProps){
        let {productData} = nextProps
        let checkedList = [...productData]
        checkedList = checkedList.filter(data=>{
            return data.selectStatus
        })
        this.setState({
            selectedAll: productData.length===checkedList.length,
        })
        this.setState({
            optionsCheckedList: checkedList
        })
    }
    handleSelectedAll = (e)=>{
        this.props.onSelectedAll()
        let {productData} = this.props
        this.setState({
            selectedAll: e.target.checked,
            optionsCheckedList: e.target.checked ? [...productData] : [],
        });
    }
    handleConfirmProduct = ()=>{
        console.log('selected: ')
        // alert(this.state.optionsCheckedList)
    }
    render(){
        let {selectedAll} = this.state
        let {productData} = this.props
        let cls = selectedAll ? 'active' : ''
        return(
            <div className="product-footer">
                <div className="toggle-all">
                    <label className={cls} >
                        <input type="checkbox" 
                            checked={selectedAll} 
                            onChange={this.handleSelectedAll}
                        />
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

export default connect(null, mapDispatchToProps)(ProductFoot)