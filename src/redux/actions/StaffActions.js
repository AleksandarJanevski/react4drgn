import { GET_ALL_STAFF, GET_CURRENT_STAFF, POST_ALL_STAFF, POST_STAFF } from './../constants'

export const staffAction = (staff) => {
    return {
        type: 'ADD_STAFF',
        payload: staff
    }
}

