import React,{Component} from 'react'
import PropTypes from 'prop-types'
import PublicHeader from 'components/header/index.js'
import './index.css'
import {connect} from 'react-redux'
import * as actions from '../action.js'
import ProductList from './list.jsx'
import Foot from './foot.jsx'
import {FilterTypes} from '../constants.js'

class Product extends Component{
    static propTypes = {
        // productData: PropTypes.array.isRequired,
        onGetProductList: PropTypes.func.isRequired
    }
    constructor(){
        super(...arguments)
        this.state = {
            selectedAll: false
        }
    }
    componentDidMount(){
        if(this.props.productData.length === 0){
            this.props.onGetProductList()
        }
    }
    // _selectdProduct(){
    //     let {productData} = this.props
    //     let isAll = productData.every(item=>item.selectStatus)
    //     this.setState({
    //         selectedAll: isAll
    //     })
    // }
    // handleSelected=()=>{
    //     this._selectdProduct()
    // }
    render(){
        let {productData,selectedAll} = this.props
        return (
            <div className="product-wrap">
                <PublicHeader title="首页" confirm/>
                <main className="product-content">
                    <ProductList productData={productData}/>
                </main>
                <Foot selectedAll={selectedAll}/>
            </div>
        )

    }
}
const mapStateToProps = (state)=>{
    console.log(state)
    let {productData,selectedAll} = state.productData
    return {
        productData,
        selectedAll: selectedAll
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onGetProductList: ()=>dispatch(actions.getProductList()),
        onSelectedAll: ()=>dispatch(actions.selectAll()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)