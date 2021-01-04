import {
    LIST_DATA,
    LIST_POSTS_SUCCESS,
    LIST_USER_SUCCESS
} from 'constants/actionTypes'

const INIT_STATE = {
    list_blog: [],
    list_user: []
}
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LIST_DATA:
            return {
                ...state,

            }
        case LIST_POSTS_SUCCESS:
            return {
                ...state,
                list_blog: [...state.list_blog, ...action.payload]
            }
        case LIST_USER_SUCCESS:
            return {
                ...state,
                list_user: [...state.list_user, ...action.payload]
            }
        default:
            return {
                ...state
            }
    }
}