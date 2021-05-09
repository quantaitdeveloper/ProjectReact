// tk reducer chay chinh 
import {combineReducers} from "redux";
import products from "./product";
import cart from "./cart";
import mess from "./message";

const appReducer = combineReducers({
    products ,
    cart,
    mess
})
export default appReducer;