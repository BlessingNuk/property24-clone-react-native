import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class WelcomeText extends Component {
    render() {
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.bigText}>{this.props.bigText}</Text>
                <Text style={styles.smallText}>{this.props.smallText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center'
    },
    bigText: {
        fontSize: 25,
    },
    smallText: {
        color: 'grey'
    }
})

export default WelcomeText;