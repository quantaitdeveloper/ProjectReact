import React, { Component } from 'react';
import * as Mess from "../constants/Message";
class Product extends Component {
    onAddToCart=(product)=>{
        this.props.onAddToCart(product);
        this.props.onAddToCartSuccess(Mess.MESS_SUCCESS);
    }
    
    render() {
       
        let product = this.props.product ;
        return (
          
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {
                                this.showRating(product.rating)
                            }
                        </ul>
                        <p className="card-text">
                            {product.discription}
                                    </p>
                        <div className="card-footer">
                            <span className="left">$ {product.price}</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart" onClick={()=>this.onAddToCart(product)}>
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    showRating(rating){
        let result = [] ; 
        for(let i=0 ; i<rating ; i++){
         
            result.push( <li  key={i} ><i className="fa fa-star"></i></li>)
            
        }
        for(let j=0 ; j<5-rating ; j++){
         
            result.push( <li key={j+111}><i  className="fa fa-star-o"></i></li>)
            
        }
        return result;

    }
}

export default Product;
