import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import Card from "../components/common/Card";
import Input from "../components/common/Input";

class ListingForm extends Component {

    
    render(){
 
        return(
            <View>
                <View style={styles.headerStyle}>
                    <Text style={styles.labelStyle}>Property Images</Text>
                    <Text style={styles.deleteStyle}>{this.props.delete}</Text>
                </View>
                <Card>
                    <View style={styles.pictureContainer}>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}>
                            <Button title="Take Photo" color='#1B70B5'/>
                        </View>
                        <View style={styles.buttonStyle}>
                            <Button title="Choose A photo" color='#1B70B5' />
                        </View>
                    </View>
                </Card>

                <Text style={styles.labelStyle}>Property Details</Text>
                <Card>
                    <Input 
                        placeholder="Name"
                        onChangeText = {(text)=>this.props.onNamePress(text)}
                        value={this.props.name}
                    />
                    <Input 
                        placeholder="Address"
                        onChangeText = {(text)=>this.props.onAddressPress(text)}
                        value={this.props.address}
                    />
                    <Input 
                        placeholder="Price"
                        onChangeText = {(text)=>this.props.onPricePress(text)}
                        value={this.props.price}
                    />
                </Card>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button title="Cancel" color='#1B70B5'/>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title={this.props.rightButton} color='#1B70B5' onPress={this.props.onPress}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pictureContainer:{
       height: 180
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonStyle: {
        width: 135
    },
    labelStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deleteStyle: {
        fontSize: 15,
        color: 'red'
    }
})


export default  ListingForm;