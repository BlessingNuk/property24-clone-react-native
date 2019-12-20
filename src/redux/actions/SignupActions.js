import { NAME_CHANGE, SIGINUP_EMAIL, SIGNUP_PASSWORD, CONFIRM_PASSWORD, SIGNUP_USER_SUCCESS,SIGNUP_USER_FAILED } from "../Types"
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const nameChange = (text) => {
    return {
        type: NAME_CHANGE,
        payload: text
    }
}

export const emailChange = (text) => {
    return {
        type: SIGINUP_EMAIL,
        payload: text
    }
}

export const passwordChange = (text) => {
    return {
        type: SIGNUP_PASSWORD,
        payload: text
    }
}

export const confirmPassword = (text) => {
    return {
        type: CONFIRM_PASSWORD,
        payload: text
    }
}

export const signupPress = ({name, email, password, confirmPw}) => {
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => signupUserSuccess(dispatch,user))
            .catch(()=>signupUserFailed(dispatch))
    }
}

const signupUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: user
    })
    Actions.listings({type: 'reset'})
}

const signupUserFailed = (dispatch) => {
    dispatch({
        type: SIGNUP_USER_FAILED,
        payload: 'Something went wrong. Try Again'
    })
}
