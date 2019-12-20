import React, {Component} from "react";
import {Text} from "react-native";
import Container from "../components/Container";
import ListingForm from "../components/ListingForm";
import { toEditScreen } from "../redux/actions/CreatePropertyActions";
import {nameChange, addressChange, priceChange} from '../redux/actions/editProperty'
import { connect } from "react-redux";

class EditListing extends Component {
    componentWillMount (){
        const {property} = this.props
        this.props.toEditScreen(property)
    }
    onSubmitPress(){
        
    }
    onNamePress(text){
        this.props.nameChange(text)

    }
    onAddressPress(text){
        this.props.addressChange(text)
    }
    onPricePress(text){
        props.priceChange(text)
    }
    render() {
        return(
            <Container style={{margin: 10, paddingHorizontal: 10}}>
                  <ListingForm 
                    rightButton='Submit' delete='DELETE' 
                    
                    name={this.props.name} 
                    address={this.props.address} 
                    price={String(this.props.name.price)}

                    onPress={this.onSubmitPress.bind(this)}
                    onAddressPress={this.onAddressPress.bind(this)} 
                    onNamePress={this.onNamePress.bind(this)} 
                    onPricePress={this.onPricePress.bind(this)}

                /> 
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.item.obj.name,
        price: state.item.obj.price,
        address: state.item.obj.address,
        }
}


export default connect(mapStateToProps, {toEditScreen, nameChange, addressChange, priceChange})(EditListing);