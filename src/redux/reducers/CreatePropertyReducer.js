import { PROPERTY_PRICE, PROPERTY_NAME, PROPERTY_ADDRESS } from "../Types";


const INITIAL_STATE = {
    name: '',
    address: '',
    price: '',
    img: ''
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case PROPERTY_NAME:
            return {...state, name: action.payload};
        case PROPERTY_ADDRESS:
            return {...state, address: action.payload};
        case PROPERTY_PRICE:
            return {...state, price: action.payload};
        default:
            return state;
    }
}