import * as pro from './actionTypes.js'
const defaultState = {
    selectedAll: false,
    productData: []
}
export const productData = (state=defaultState, action)=>{
    let {productData, selectedAll} = state
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
            console.log(selectedAll)
            return {
                ...state,
                productData: productData.map(item=>({
                    ...item,
                    selectStatus: !isAll
                })), 
                selectedAll: !isAll
            }    
        case pro.CLEARSELECTED:
            return state
        
        default:
            return state;
    }
}