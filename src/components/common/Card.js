import React,{ Component } from "react";
import { View, StyleSheet } from "react-native";
import { mainColor } from "../../screens/colorConstants";

class Card extends Component{
    render(){
        return(
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: mainColor,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingBottom: 25
    }
})

export default Card;