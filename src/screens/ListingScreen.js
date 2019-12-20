import React,{ Component } from "react";
import { View, StyleSheet, Text, FlatList, Button, TouchableWithoutFeedback, Image} from "react-native";
import FloatingButton from "../components/FloatingButton";
import { connect } from "react-redux";
import { fetchProperties, toEditScreen} from "../redux/actions/CreatePropertyActions";
import _ from "lodash";
import Property from "../components/Property";
import { mainColor, blueish } from "./colorConstants";
import Header from '../components/common/Header'





class ListingScreen extends Component{
    componentWillMount(){
        this.props.fetchProperties()
        
    }
    
    render(){
        return(
            <View style={{flex:1}} >
                <View style={styles.containerStyle}>
                    <TouchableWithoutFeedback onPress={this.onPress}>
                        <View style={styles.listingContainer} >
                            <Text style={styles.textStyle}>LISTINGS</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.profileStyle}>
                        <Text  style={styles.textStyle}>PROFILE</Text>
                    </View>
                </View>
                <FlatList
                    data={this.props.properties}
                    renderItem={({item}) => 
                    <Property item={item} />
                    }
                />
                <FloatingButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        backgroundColor: 'cyan',
        height: 45,
        backgroundColor: blueish

    },
    listingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:2,
        borderBottomColor: 'white',
        
    },
    profileStyle: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 15,
        color: 'white'
    },
    
})

const mapStateToProps = state => {
    //const properties = Object.values(state.properties)
    const properties = state.properties.obj
    return {properties}
    
}


export default connect(mapStateToProps, {fetchProperties} )(ListingScreen);