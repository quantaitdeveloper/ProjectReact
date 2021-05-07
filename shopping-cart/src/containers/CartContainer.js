import React, { Component } from 'react';
import { connect } from "react-redux";
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as MESSAGE from "../constants/Message";
import * as actions from "../actions/index";

class CartContainer extends Component {
    showCartItem(cart) {
        let result = "";
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem index={index} cart={item} key={index} onDelete={this.props.onDelete} onDeleteSuccess={this.props.onDeleteSuccess} ></CartItem>
            })
        }
        else{
            result=MESSAGE.MESS_CART_EMPTY;
        }
        return result;
    }

    showCartToTal(cart) {
        let result = null;
        if (cart.length > 0) {
            
                result = <CartResult cart={cart} ></CartResult>
           
        }
      
        return result;
    }
    render() {
        return (
            <Cart>
                {this.showCartItem(this.props.cart)}
                {this.showCartToTal(this.props.cart)}
            </Cart>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }

}

const mapDispatchToProps = (dispatch , props) =>{
    return {
        onDelete : (product)=>{
            dispatch(actions.deleteProduct(product));
        },
        onDeleteSuccess : (mess)=>{
            dispatch(actions.deleteProduct(mess));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
