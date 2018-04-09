import { GETPRODUCTION, TOGGLESELECT, EDITPRODUCTION, CLEARSELECTED,SELECTALL } from './actionTypes.js'
import Request from 'common/js/request/request'

export const getProductList = ()=>{
    return async dispatch=>{
        try{
            let result = await Request.productList();
            result = result.data.productList
            result.map(item=>{
                item.selectStatus = false;
                item.selectNum = 1;
                return item
            })
            dispatch({
                type: GETPRODUCTION,
                productList: result
            })
        }catch(err){
            console.log(err)
        }
    }
}

export const toggleProduct = (id)=>{
    return {
        type: TOGGLESELECT,
        id
    }
}
export const editProduct = (id, selectNum)=>{
    return {
        type: EDITPRODUCTION,
        id,
        selectNum,
    }
}
export const clearSelected = ()=>{
    return {
        type: CLEARSELECTED
    }
}
export const selectAll = ()=>{
    return {
        type: SELECTALL
    }
}