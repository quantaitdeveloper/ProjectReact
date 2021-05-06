import React, { Component } from 'react';
import Product from './Product';
import {connect} from "react-redux";

class Products extends Component {
    render() {
        let {products} = this.props ;
        let elmProduct = products.map((product , index) =>{
            return <Product key={index} product ={product} />  
            // truyen props cho tk product la mot phan tu cua mang products
        })
        return (
            <div>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {/* <!-- Product --> */}
                        {elmProduct}
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return {
        products : state.products,
    }
}

export default connect(mapStateToProps,null)(Products);
