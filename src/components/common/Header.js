import React from 'react';
import {Text, View} from 'react-native';
import { mainColor, red } from '../../screens/colorConstants';



const Header = (props) => {
    const { blueText, redText, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={blueText}>Property</Text>
        <Text style={redText}>24</Text>
    </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
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
    }
};
export default Header;