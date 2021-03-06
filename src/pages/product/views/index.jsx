import React,{Component} from 'react'
import PropTypes from 'prop-types'
import PublicHeader from 'components/header/index.js'
import './index.css'
import {connect} from 'react-redux'
import * as actions from '../action.js'
import ProductList from './list.jsx'
import ProductFoot from './foot.jsx'

class Product extends Component{
    static propTypes = {
        productData: PropTypes.array.isRequired,
        onGetProductList: PropTypes.func.isRequired
    }
    componentDidMount(){
        if(this.props.productData.length === 0){
            this.props.onGetProductList()
        }
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
        
    }
    render(){
        let {productData} = this.props
        return (
            <div className="product-wrap">
                <PublicHeader title="首页" confirm/>
                <main className="product-content">
                   <ProductList productData={productData} />
                </main>
                <ProductFoot productData={productData} />
            </div>
        )

    }
}
const mapStateToProps = (state)=>{
    let {productData} = state.productData
    return {
        productData
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onGetProductList: ()=>dispatch(actions.getProductList()),
        onToggleProduct: (id)=>dispatch(actions.toggleProduct(id)),
        onEditProduct: (id,selectNum)=>dispatch(actions.editProduct(id,selectNum))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)