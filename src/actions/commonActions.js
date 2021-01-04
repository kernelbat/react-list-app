import {
    LIST_DATA,
    LIST_POSTS_SUCCESS,
    LIST_USER_SUCCESS
} from 'constants/actionTypes'

export const listData = (data) => {
    return {
        type: LIST_DATA,
        payload: data
    }
}

export const listPostSuccess = (data) => {
    return {
        type: LIST_POSTS_SUCCESS,
        payload: data
    }
}
export const listUserSuccess = (data) => {
    return {
        type: LIST_USER_SUCCESS,
        payload: data
    }
}