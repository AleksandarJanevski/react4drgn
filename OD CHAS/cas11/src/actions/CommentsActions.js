import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL } from './../constants/CommentsConstants';

export const fetchCommentsSuccess = (comments) => { //comments  - Array(500) prefrleniot json
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (error) => { // alert na error-ot kojsto sme go prefrlile od catch na fetch-ot
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/comments") //povik do url za get na data
            .then(res => res.json())
            .then(json => dispatch(fetchCommentsSuccess(json))) //ako e uspesen povikot dispatch akcija json -> array(500) 
            .catch(err => dispatch(fetchCommentsFail(err))) //ako e neuspesen povikot dispatch error akcija
    }
}