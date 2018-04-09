import * as pro from './actionTypes.js'
const defaultState = {
    productData: []
}
export const productData = (state=defaultState, action)=>{
    let {productData} = state
    switch(action.type){
        case pro.GETPRODUCTION:
            return {...state, productData: [...action.productList] }
        case pro.TOGGLESELECT:
            return {
                ...state, 
                productData: productData.map((item,index)=>{
                    return item.id === action.id ? 
                    {...item,selectStatus: !item.selectStatus}:item
                })
            }
        case pro.EDITPRODUCTION:
            return {
                ...state,
                productData: productData.map(item=>{
                    return item.id === action.id ? {...item,selectNum: action.selectNum} : item
                })
            }
        case pro.SELECTALL:
            let isAll = productData.every(item=>item.selectStatus)
            return {
                ...state,
                productData: productData.map(item=>({
                    ...item,
                    selectStatus: !isAll
                }))
            }    
        case pro.CLEARSELECTED:
            return state
        
        default:
            return state;
    }
}