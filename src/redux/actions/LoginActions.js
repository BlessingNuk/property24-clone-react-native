import { PASSWORD_CHANGE, LOGIN_USER_FAILED,LOGIN_USER_SUCCESS } from "../Types"
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const emailChange = (text) => {
    return {
        type: 'email_change',
        payload: text
    }
}

export const passwordChange = (text) => {
    return {
        type: PASSWORD_CHANGE,
        payload: text
    }
}

export const loginPress = ({email, password}) => {
    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {loginUserSuccess(dispatch, user)})
            .catch(() => {loginUserFailed(dispatch)})
    }  
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.listings({type: 'reset'})
}

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED,
        payload: 'Login failed. Wrong email or password'
    })
}
