import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {connect} from 'react-redux'
import * as actions from '../action.js'

class ProductItem extends Component{
    static propTypes = {
        item: PropTypes.object.isRequired,
        key: PropTypes.number,
        // onChangeSelectedAll: PropTypes.func.isRequired
    }
    handleDecrease = (item)=>{
        let {id, selectNum} = item
        if(selectNum === 0){
            return
        }
        this.props.onEditProduct(id,selectNum-1)
    }
    handleAdd = (item)=>{
        let {id, selectNum} = item
        this.props.onEditProduct(id,selectNum+1)
    }
    handleToggle = (item)=>{
        this.props.onToggleProduct(item.id)
        // this.props.onChangeSelectedAll(this.state.selectedAll)
    }

    render(){
        let {item,key} = this.props
        return (
            <li className="product-item flex" key={key}>
                <div className="left flex">
                    <span className="checkbox-content" onClick={this.handleToggle.bind(this,item)}>
                        <input type="checkbox" defaultValue={item.id} defaultChecked={item.selectStatus}/>
                        <i className={`check-bg ${item.selectStatus?'active':''}`}></i>
                    </span>
                    <span className="name">{item.name}--{item.id}</span>
                </div>
                <div className="controller flex">
                    <span className={`circle desc ${item.selectNum>0?'active':''}`}
                        onClick={this.handleDecrease.bind(this,item)}>-</span>
                    <span className="num">{item.selectNum}</span>
                    <span className="circle add active" 
                    onClick={this.handleAdd.bind(this, item)}>+</span>
                </div>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    // let {id,selectNum} = ownProps
    return {
        onToggleProduct: (id)=>dispatch(actions.toggleProduct(id)),
        onEditProduct: (id,selectNum)=>dispatch(actions.editProduct(id,selectNum)),
        onClearProduct: ()=>dispatch(actions.clearSelected()),
        onSelectedAll: ()=>dispatch(actions.selectAll()),
    }
}

export default connect(null,mapDispatchToProps)(ProductItem)