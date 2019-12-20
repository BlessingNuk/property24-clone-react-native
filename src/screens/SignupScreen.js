import React, { Component } from "react";
import Logo from "../components/Logo";
import WelcomeText from "../components/WelcomeText";
import SignupForm from "../components/SignupForm";
import Container from "../components/Container";
import { Button } from "react-native";
import { Actions } from "react-native-router-flux";

class SignupScreen extends Component {
    render(){
        return(
            <Container>
                <Logo />
                <WelcomeText bigText="Welcome New User," smallText="Sign up to get started"/>
                <SignupForm />
                
            </Container>
        )
    }
}

export default SignupScreen;