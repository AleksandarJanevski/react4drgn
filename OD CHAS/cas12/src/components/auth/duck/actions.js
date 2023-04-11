import constants from "./constants";

const logInSuccess = (loginData) => {
    return {
        type: constants.LOGIN_SUCCESS,
        payload: loginData
    }
}

const logInFailed = (error) => {
    return {
        type: constants.LOGIN_FAILED,
        payload: error
    }
}

const logOutUser = () => {
    return {
        type: constants.LOGOUT_USER,
        payload: "Logged Out"
    }
}

export default {
    logInSuccess,
    logInFailed,
    logOutUser
}