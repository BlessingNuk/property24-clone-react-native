import { NAME_CHANGE, SIGINUP_EMAIL, SIGNUP_PASSWORD, CONFIRM_PASSWORD, SIGNUP_PRESS, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILED } from "../Types";

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    confirmPw: '',
    error: '',
    loading: ''
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGE:
            return {...state, name: action.payload}
        case SIGINUP_EMAIL:
            return {...state, email: action.payload}
        case SIGNUP_PASSWORD:
            return {...state, password: action.payload}
        case CONFIRM_PASSWORD:
            return {...state, confirmPw: action.payload}
        case SIGNUP_USER_SUCCESS:
            return state
        case SIGNUP_USER_FAILED:
            return {...state, error: action.payload}
        default:
            return state;
    }
}