import {View, Image, TouchableWithoutFeedback, Text, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { red, mainColor } from './screens/colorConstants';
import { Actions } from 'react-native-router-flux';

class NavBar extends Component{
    onBackPress= () =>{
        switch (Actions.currentScene) {
            case 'signup':
                Actions.login()
                break;
            case 'createListing':
                Actions.listings()
                break;
            case 'edit':
                Actions.listings()
                break;
        }
    }
    render(){
        const { blueText, redText, viewStyle,backarrowStyle, textContainer } = styles;
        return(
            <View style={viewStyle}>
                <View>
                    <TouchableOpacity onPress={this.onBackPress}>
                        <Image source={require('./backButton.png')}
                            style={backarrowStyle}/>
                    </TouchableOpacity>
                </View>
                <View style={textContainer}>
                    <Text style={blueText}>        Property</Text>
                    <Text style={redText}>24</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    backarrowStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        left: 0,
        justifyContent: 'flex-start',
    
    },
    viewStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        height: 70,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
    },
    blueText: {
        color: mainColor,
        fontSize: 30,
        fontWeight: 'bold'
    },
    redText: {
        color: red,
        fontSize: 30,
        fontWeight: 'bold'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
};


export default NavBar;