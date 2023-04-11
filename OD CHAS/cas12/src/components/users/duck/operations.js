import { getUsers, removeUser } from './../../../api/usersApi';
import actions from './actions';

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams));
        return getUsers()
            .then(result => {
                dispatch(actions.fetchUsersSuccess(result));
                return result;
            })
            .catch(err => {
                dispatch(actions.fetchUsersFail(err));
                return err;
            })
    }
}

const deleteUserFromJsonPlaceholder = (requestParams) => {
    return dispatch => {
        dispatch(actions.deleteUserRequest(requestParams));
        return removeUser(requestParams) //requestParams -> id-to na elem za brisenje
            .then(result => {
                dispatch(actions.deleteUserSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.deleteUserFail(err))
                return err;
            })
    }
}

// eslint-disable-next-line
export default {
    fetchUsers,
    deleteUserFromJsonPlaceholder
}