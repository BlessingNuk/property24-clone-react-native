import { TO_EDIT_SCREEN, PROPERTY_PRICE_EDIT, PROPERTY_NAME_EDIT, PROPERTY_ADDRESS_EDIT } from "../Types";

const INITIAL_STATE = {
    obj: {
        name: "",
        address: "",
        price : "",
        img: ''
    },
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TO_EDIT_SCREEN:
            //console.log(action.payload)
            return {...state, obj: action.payload};
        case PROPERTY_PRICE_EDIT:
            return {...state, obj: {...state.obj, price:action.payload}}
        case PROPERTY_NAME_EDIT:
            return {...state, obj: {...state.obj, name:action.payload}}
        case PROPERTY_ADDRESS_EDIT:
            return {...state, obj: {...state.obj, address:action.payload}}
        default:
            return state
    }
}