import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";

class Property extends Component{
    onPropertyPress() {
        Actions.edit({property: this.props.item })
    }
    render() {
        console.log(this.props.item.img)
        return(
            <TouchableOpacity onPress={this.onPropertyPress.bind(this)}>
                <View style={styles.container}>
                    <View style={styles.imgContainer}>
                         <Image source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}} style={styles.imgStyle}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.addressStyle}> {this.props.item.address} </Text>
                        <Text style={styles.nameStyle}> {this.props.item.name} </Text>
                        <Text style={styles.priceStyle}> {this.props.item.price} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: 5,
        marginTop: 10
    },
    imgStyle: {
        height: 150
    },
    imgContainer: {
        height: 150,
    },
    infoContainer: {
        padding: 10
    },
    addressStyle: {
        fontSize: 20,
    },
    nameStyle: {
        fontSize: 15,
    },
    priceStyle: {
        fontSize: 10
    }
})
export default Property;