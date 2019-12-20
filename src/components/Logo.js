import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { mainColor, red } from "../screens/colorConstants";

class Logo extends Component {
    render(){
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.propertyText}>Property</Text>
                <Text style={styles.NumberText}>24</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    propertyText: {
        color: mainColor,
        fontSize: 45,
        fontWeight: 'bold'
    },
    NumberText: {
        color: red,
        fontSize: 45,
        fontWeight: 'bold'
    }
})

export default Logo;