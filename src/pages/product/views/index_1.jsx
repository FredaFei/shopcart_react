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
        productData: PropTypes.array.isRequired,
        onGetProductList: PropTypes.func.isRequired
    }
    constructor(){
        super(...arguments)
        this.state = {
            selectedAll: false
        }
    }
    componentDidMount(){
        // if(this.props.productData.length === 0){
        // }
            this.props.onGetProductList()
    }
    xx=()=>{
        console.log(this.state.selectedAll)
        this.setState(prevState=>({
            selectedAll: !prevState.selectedAll
        }))
    }
    render(){
        let {productData} = this.props
        return (
            <div className="product-wrap">
                <PublicHeader title="首页" confirm/>
                <main className="product-content">
                    <ProductList productData={productData} />
                </main>
                <Foot productData={productData} 
                selectedAll={this.state.selectedAll}
                onChangeSelectedAll={this.xx} />
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
        onSelectedAll: ()=>dispatch(actions.selectAll()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)