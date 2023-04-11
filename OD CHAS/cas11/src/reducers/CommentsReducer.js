import {FETCH_COMMENTS_FAIL,FETCH_COMMENTS_SUCCESS} from './../constants/CommentsConstants';

const initialState = {
    comments: [],
    errorMessage: undefined
}

const CommentsReducer  = (state=initialState,action) => {

    switch(action.type){

        case FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                comments: action.payload // Array(500) comments
            }
        
        case FETCH_COMMENTS_FAIL:
            return{
                ...state,
                errorMessage: action.payload // Error from fetch
            }

        default: return state;
    }

}

export default CommentsReducer;