import actions from './actions'
import {logInUser} from './../../../api/authApi';

const logInToApp = (email,password) => {
    return dispatch => {
        return logInUser(email,password)
            .then(res=>{
                dispatch(actions.logInSuccess(res))
                return res;
            })
            .catch(err=>{
                dispatch(actions.logInFailed(err))
                return err;
            })
    }
}

const logOut = () => {
    return dispatch =>{
        dispatch(actions.logOutUser())
    }
}

export default {
    logInToApp,
    logOut
}