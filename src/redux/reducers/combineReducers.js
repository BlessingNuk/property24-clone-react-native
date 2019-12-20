import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "./SignupReducer";
import CreatePropertyReducer from "./CreatePropertyReducer";
import PropertyReducer from "./PropertyReducer";
import EditReducer from "./EditReducer";

export default combineReducers ({
    login: LoginReducer ,
    signup: SignupReducer,
    createProperty: CreatePropertyReducer,
    properties: PropertyReducer,
    item: EditReducer
})