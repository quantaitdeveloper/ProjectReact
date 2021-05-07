import * as types from "../constants/ActionType";

//tham so truyen vao la 1 san pham + so luong mua 

export const addToCart = (product , quantity) =>{
    return {
        type : types.ADD_TO_CART,
        product ,
        quantity
    }
}

export const addToCartSuccess = (message)=>{
    return {
        type:types.ADD_TO_CART_SUCCESS
    }
}
export const deleteProduct = (product) =>{
    return {
        type:types.DELETE_PRODUCT,
        product
    }
}