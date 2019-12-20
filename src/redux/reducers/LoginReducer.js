import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from "../Types";
const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {...state, email: action.payload};
        case PASSWORD_CHANGE:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return state;
        case LOGIN_USER_FAILED:
            return{...state, error: action.payload}
        default:
           return state;
    }
}