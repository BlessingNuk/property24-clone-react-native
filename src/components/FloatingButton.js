import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { mainColor } from '../screens/colorConstants';

 class FloatingButton extends Component{
  render() {
    return (
        <TouchableOpacity onPress={() => Actions.createListing()} style={styles.fab}>
            <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: mainColor,
        borderRadius: 30,
        elevation: 8
      },
      fabIcon: {
        fontSize: 40,
        color: 'white'
      }
});

export default FloatingButton;