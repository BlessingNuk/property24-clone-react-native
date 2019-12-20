import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import Input from "./common/Input";
import { connect } from "react-redux";
import {nameChange, emailChange, passwordChange, confirmPassword, signupPress} from "../redux/actions/SignupActions";


class SignupForm extends Component {

    onSignupPress() {
        const {email, password} = this.props
        this.props.signupPress({email,password})
    }
    render(){
        return(
            <View>
                <Text style={styles.errorText}>{this.props.error}</Text>
                <Input 
                    label='Name:' 
                    placeholder='John'
                    onChangeText={(text)=>{this.props.nameChange(text)}}
                    value = {this.name}                   
                />
                <Input 
                    label='Email:' 
                    placeholder='JohnDoe@gmail.com'
                    onChangeText={(text)=>{this.props.emailChange(text)}}
                    value = {this.email}
                      
                />
                <Input 
                    label='Password:' 
                    placeholder='Enter password' 
                    secureTextEntry 
                    onChangeText={(text)=>{this.props.passwordChange(text)}}
                    value = {this.password}
                />
                <Input 
                    label='Confirm password:' 
                    placeholder='Enter password' 
                    secureTextEntry 
                    onChangeText={(text)=>{this.props.confirmPassword(text)}}
                    value = {this.confirmPw}
                />
                <View style={styles.button}>
                    <Button title='Signup' onPress={this.onSignupPress.bind(this)} color='#1B70B5'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        marginTop: 20
    },
    errorText: {
        color: 'red',
        fontSize: 20
    }
})
const mapStateToProps = state => {
    const {name, email, password, confirmPw, error} = state.signup
    return {
        name: name,
        email: email,
        password: password,
        confirmPw: confirmPw, 
        error: error
    }
}
export default connect(mapStateToProps, {nameChange, emailChange, passwordChange, confirmPassword, signupPress})(SignupForm);