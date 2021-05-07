import React, { Component } from 'react';
import { connect } from "react-redux";
import Products from '../components/Products';
import Product from "../components/Product";
import * as actions from "../actions/index";

class ProductContainer extends Component {
    showProduct(products) {
        let result = "";
        result = products.map((product, index) => {
            return <Product key={index} product={product} onAddToCart={this.props.onAddToCart} onAddToCartSuccess={this.props.onAddToCartSuccess} />
            // truyen props cho tk product la mot phan tu cua mang products
        })
        return result;
    }


    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}

            </Products>  // truyen cho tk Products 1 props products 
        );
    }

}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product, 1));
        },
        onAddToCartSuccess: (mess) => {
            dispatch(actions.addToCartSuccess(mess))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
