import constants from "./constants";

const initialState = {
    users: [],
    errorMessage: undefined,
    // isLoading: false
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case constants.GET_USERS_REQUEST:
            return {
                ...state,
                // isLoading: true
            }

        case constants.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                // isLoading: false
            }

        case constants.GET_USERS_FAIL:
            return {
                ...state,
                errorMessage: action.payload,
                // isLoading: false
            }
        
        case constants.DELETE_USERS_REQUEST:
            return{
                ...state
            }
        
        case constants.DELETE_USERS_SUCCESS:
            return{
                ...state,                                           //userId
                users: [...state.users.filter(user=> user.id !== action.payload)]
            }

        case constants.DELETE_USERS_FAIL:
            return{
                ...state,
                errorMessage: action.payload
            }

        default: return state;
    }
}