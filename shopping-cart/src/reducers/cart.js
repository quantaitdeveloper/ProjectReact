import * as types from "../constants/ActionType";

const data = JSON.parse(localStorage.getItem("cart"));


const initialState = data? data:[];

const findIndex = (cart , product) =>{
    let index = -1 ; 
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].product.id === product.id){
            index = i ;
            break;
        }
        
    }
    return index;
}

const cart = (state = initialState, action) => {
    let index = -1 ; 
    switch (action.type) {
        
        case (types.ADD_TO_CART): {
            
            index = findIndex(state , action.product);
            if(index !==-1){
                state[index].quantity += action.quantity;
            }
            else{
                let newOrderProduct ={
                    product: action.product,
                    quantity : action.quantity
                }
                state.push(newOrderProduct);
            }
            localStorage.setItem("cart",JSON.stringify(state))
         
            return [...state]
        }
        case(types.DELETE_PRODUCT):{
            index = findIndex(state , action.product);
            if(index !==-1){
                state.splice(index ,1);
            }
            localStorage.setItem("cart",JSON.stringify(state))
            return [...state]
        }
        case (types.UPDATE_PRODUCT):{
            console.log(action)
            index = findIndex(state , action.product);
            if(index !==-1){
                if(action.quantity>0){
                    state[index].quantity = action.quantity;
                }
                
            }
            localStorage.setItem("cart",JSON.stringify(state))
            return [...state]
        }
        default:
            return [...state]

    }
}
export default cart;