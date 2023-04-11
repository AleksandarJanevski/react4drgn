import constants from "./constants";
import { removeUserStorage,setUserStorage } from "../../../config/StorageFunctions";

const initialState = {
    token: undefined,
    user:undefined
}

const reducer = (state=initialState,action) => {

    switch(action.type){

        case constants.LOGIN_SUCCESS:
            setUserStorage(action.payload.accessToken,action.payload.username)
            return{
                ...state,
                token:action.payload.accessToken,
                user:action.payload.username
            }
        
        case constants.LOGIN_FAILED:
            return{
                ...state
            }

        case constants.LOGOUT_USER:
            removeUserStorage();
            return{
                ...state,
                user:undefined,
                token:undefined
            }    


        default: return state;
    }
}


export default reducer;