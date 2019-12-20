import { PROPERTY_NAME, PROPERTY_ADDRESS, PROPERTY_PRICE, FETCH_PROPERTIES, TO_EDIT_SCREEN } from "../Types"
import  firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const nameChange = text => {
    return {
        type: PROPERTY_NAME,
        payload: text
    }
}

export const addressChange = text => {
    return {
        type: PROPERTY_ADDRESS,
        payload: text
    }
}

export const priceChange = text => {
    return {
        type: PROPERTY_PRICE,
        payload: text
    }
}

export const createButton = ({name, address, price, img}) => {
    return () => {
        fetch('http://zaio-week4-rest-api.herokuapp.com/api/property', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                address: address,
                img: img,
                price: price
            })
        })
        .then(() => console.log('success'))
        .catch(error => console.log(error))        

        
    }
}

export const fetchProperties = () => {
    return(dispatch) => {
        fetch('http://zaio-week4-rest-api.herokuapp.com/api/property')
            .then(response => response.json())
            .then(data => {
            dispatch({
                type: FETCH_PROPERTIES,
                payload: data
            })}
            )
    }
}


export const toEditScreen = (item) => {
    return {
        type: TO_EDIT_SCREEN,
        payload: item
    }
}