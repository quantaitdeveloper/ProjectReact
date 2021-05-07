import React, { Component } from 'react';
import { MESS_DELETE_SUCCESS } from '../constants/Message';

class CartItem extends Component {
    onDelete=(product)=>{
        this.props.onDelete(product);
        this.props.onDeleteSuccess(MESS_DELETE_SUCCESS);
    }
    render() {
        let {cart,index} = this.props;
        return (
            
                <tr>
                    <td>{index+1}</td>
                    <th scope="row">
                        <img src={cart.product.image}
                            alt="" className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{cart.product.name}</strong>
                        </h5>
                    </td>
                    <td>{cart.product.price}$</td>
                    <td className="center-on-small-only">
                        <span className="qty">{cart.quantity}</span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <a>—</a>
                            </label>
                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>{cart.product.price * cart.quantity}$</td>
                    <td>
                        <button type="button" onClick={()=>this.onDelete(cart.product)} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item">
                            X
                                        </button>
                    </td>
                </tr>
       
        );
    }
}

export default CartItem;
