import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class Container extends Component{
    render(){
        return(
            <View style={[styles.containerStyle, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        margin: 50,
    }
})
export default Container;