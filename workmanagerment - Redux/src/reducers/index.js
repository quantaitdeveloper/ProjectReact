import {combineReducers} from "redux";
import tasks from "./tasks";

/* combine reducer */


const myReducer = combineReducers({ 
    tasks 
});
export default myReducer;