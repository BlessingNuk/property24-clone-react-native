import { FETCH_PROPERTIES, TO_EDIT_SCREEN } from "../Types";

const INITIAL_STATE = {
    obj: []
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES:
            return {...state, obj: action.payload};
        default:
            return state
    }
}