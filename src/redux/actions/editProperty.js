import { PROPERTY_NAME_EDIT, PROPERTY_ADDRESS_EDIT, PROPERTY_PRICE_EDIT} from "../Types"

export const nameChange = text => {
    return {
        type: PROPERTY_NAME_EDIT,
        payload: text
    }
}

export const addressChange = text => {
    return {
        type: PROPERTY_ADDRESS_EDIT,
        payload: text
    }
}

export const priceChange = text => {
    return {
        type: PROPERTY_PRICE_EDIT,
        payload: text
    }
}
