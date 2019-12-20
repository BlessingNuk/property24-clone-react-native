import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { greyish } from "../../screens/colorConstants";

class Input extends Component {
    render() {
        return(
            <View>
                <Text style={styles.textStyle}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry} 
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    autoCorrect={false}
                    onChangeText={this.props.onChangeText}
                    style={styles.inputStyle}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: greyish,
        marginVertical: 5
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 5
    }
})

export default Input;