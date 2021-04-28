import * as types from "./../constants/ActionTypes";


const data = JSON.parse(localStorage.getItem("tasks"));
const initialState = data? data:[];



const myReducer = (initState = initialState, action) =>{
    switch(action.type){
        case types.LIST_ALL:{
            return initState ;
        }
        default:{
            return initState ;
        }
    }


}

export default myReducer; 

// myReducer tra ve 1 cai state 