import { GET_ALL_STAFF, GET_CURRENT_STAFF, POST_ALL_STAFF, POST_STAFF } from './../constants'

const initialState = {
    staff: []
};

export const StaffReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_STAFF":
            return {
                ...state,
                staff: action.payload
            }
        default: return state;
    }
}