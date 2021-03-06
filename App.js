import  React, { Component } from "react";
import Router from "./src/Router"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/redux/reducers/combineReducers";


export default class App extends Component {
    render() {
        const store= createStore(reducers,  {}, applyMiddleware(ReduxThunk))
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}