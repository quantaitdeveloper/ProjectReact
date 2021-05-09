import * as types from "../constants/ActionType";
import * as Mess from "../constants/Message";

const initialState = Mess.MESS_WELLCOME;
const message = (state = initialState , action)=>{
    switch(action.type){
        case(types.ADD_TO_CART_SUCCESS):{
            state = Mess.MESS_SUCCESS;
            return state;
        }
        case(types.DELETE_PRODUCT):{
            state = Mess.MESS_DELETE_SUCCESS;
            return state;
        }
        case(types.UPDATE_PRODUCT):{
            state = Mess.MESS_UPDATE_SUCCESS;
            return state;
        }
        default : 
            return state;
    }
}
export default message;