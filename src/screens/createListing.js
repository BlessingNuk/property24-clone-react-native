import React, {Component} from "react"
import Container from "../components/Container";
import ListingForm from "../components/ListingForm";
import { connect } from "react-redux";
import { nameChange, addressChange, priceChange, createButton } from "../redux/actions/CreatePropertyActions";



class createListing extends Component {
    onCreatePress(){
        const img = 'imag'
        const {name, address, price} = this.props
        this.props.createButton({name,address,price, img})
    }
    onNamePress(text){
        this.props.nameChange(text)
    }
    onAddressPress(text){
        this.props.addressChange(text)
    }
    onPricePress(text){
        this.props.priceChange(text)
    }
   
    render() {
        return(
            <Container style={{margin: 10, paddingHorizontal: 10}}>
                  <ListingForm rightButton='Create' onPress={this.onCreatePress.bind(this)} onAddressPress={this.onAddressPress.bind(this)} onNamePress={this.onNamePress.bind(this)} onPricePress={this.onPricePress.bind(this)}/> 
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const {name, address, price} = state.createProperty
    return {
        name: name,
        address: address,
        price: price
    }
}




export default connect(mapStateToProps, {createButton, nameChange, addressChange, priceChange})(createListing);