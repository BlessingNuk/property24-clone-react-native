import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Input from "./common/Input";
import { emailChange, passwordChange, loginPress } from "../redux/actions/LoginActions";
import { connect } from "react-redux";
import mainColor from "../screens/colorConstants"


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChange(text)
    }
    onPasswordChange(text){
        this.props.passwordChange(text)
    }
    onLoginPress(){
        const {name,email, password,confirmPw} = this.props
        this.props.loginPress({name,email, password,confirmPw})
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.errorText}>{this.props.error}</Text>
                <Input 
                    label='Email:' 
                    placeholder='Enter email' 
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
                <Input 
                    label='Password:' 
                    placeholder='Enter password' 
                    secureTextEntry 
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                <Button title='Login' onPress={this.onLoginPress.bind(this)} color= '#1B70B5'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30
    },
    forgotPasswordText: {
        textAlign: 'center',
        color: 'grey',
        marginVertical: 10
        },
    errorText: {
        color: 'red',
        fontSize: 20
    }
})
const mapStateToProps = state => {
    return {
        email: state.login.email,
        password: state.login.password,
        error: state.login.error
    }
}
export default connect(mapStateToProps, {emailChange, passwordChange, loginPress})(LoginForm);