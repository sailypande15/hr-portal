import { combineReducers } from "redux";

const initialUserData={
    userProfile:{}
}
function UserReducer(state=initialUserData,action){
    switch(action.type){
        case "UPDATE" :{
            console.log("state ="+JSON.stringify(state));
            console.log("state ="+JSON.stringify(action.payload))
            return {...state,userProfile:action.payload};
        }
        default:{
            return state;
        }
    }
}
const initialData={
    users:[]
}
function DataReducer(state=initialData,action){
    switch(action.type){
        case "UPDATE_DATA":
            {
                return { ...state,users:[...state.users,action.payload]};
            }
            
        case "GET_DATA":
            return {users:[...action.payload]};
        default:
            return state;
    }

}

const combinedReducer=combineReducers({
    userReducer:UserReducer,
    dataReducer:DataReducer
});

export default combinedReducer;