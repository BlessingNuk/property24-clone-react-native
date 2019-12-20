import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import Logo from "../components/Logo";
import WelcomeText from "../components/WelcomeText";
import LoginForm from "../components/LoginForm";
import Container from "../components/Container";
import { Actions } from "react-native-router-flux";
import { mainColor } from "./colorConstants";

class LoginScreen extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBJay-omgqCQ0paiehOwMUvfPxfcOxCgnk",
            authDomain: "property24-clone.firebaseapp.com",
            databaseURL: "https://property24-clone.firebaseio.com",
            projectId: "property24-clone",
            storageBucket: "property24-clone.appspot.com",
            messagingSenderId: "448361340681",
            appId: "1:448361340681:web:e0cf8905314fe5a66a7dd8"
          };
          // Initialize Firebase
          if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
          }
    }
    render(){
        return(
            <Container>
                <Logo />
                <WelcomeText bigText="Welcome Back," smallText="Sign in to continue"/>
                <LoginForm />
                <View style={styles.newUser}>
                    <Text>New User?  </Text>
                    <TouchableOpacity onPress={()=> Actions.signup()}>
                        <Text style={styles.signupText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    newUser: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5
    },
    signupText: {
        color: mainColor,

    }
})

export default LoginScreen;