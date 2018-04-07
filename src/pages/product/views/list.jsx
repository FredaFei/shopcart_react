import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {connect} from 'react-redux'
import * as actions from '../action.js'
import ProductItem from './item.jsx'

const ProductList = ({productData})=>{
    let li
    if(productData.length===0){
        li = <div>暂无数据。。。</div>
    }else{
        li = productData.map((item,index)=>{
            return <ProductItem item={item} key={index} />
        })
    }
    return (
        <ul className="product-list">{li}</ul>
    )
}

ProductList.propTypes = {
    productData: PropTypes.array.isRequired
}

export default ProductList