import React, { Component } from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ListingScreen from "./screens/ListingScreen";
import createListing from "./screens/createListing";
import EditListing from "./screens/EditListing";
import Header from "./components/common/Header";
import NavBar from "./NavBar";

class RouterComponent extends Component{
    
    render(){
        return(
            <Router sceneStyle={{backgroundColor: 'white'}} >
                <Scene>
                    <Scene key='login' component={LoginScreen} initial  navBar={Header}/>
                    <Scene key='signup' component={SignupScreen} title="Sign up"navBar={NavBar}/>
                    <Scene key='listings' component={ListingScreen} title="Propery24" navBar={Header}/>
                    <Scene key='createListing' component={createListing} title="Create a Listing" navBar={NavBar} />
                    <Scene key="edit" component={EditListing} title="Edit Property" navBar={NavBar}/>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;