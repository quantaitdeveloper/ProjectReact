import React, { Component } from 'react';
import { MESS_DELETE_SUCCESS, MESS_UPDATE_SUCCESS } from '../constants/Message';

class CartItem extends Component {
    
    
    
    onDelete=(product)=>{
        let name = product.name;
        console.log(typeof(name))
        let check = window.confirm("Xác Nhận Xóa Sản Phẩm "+name+" ?");
        if(check ===true ){
        this.props.onDelete(product);
        this.props.onDeleteSuccess(MESS_DELETE_SUCCESS);
        }
        
    }
    onUpdate =(product , quantity)=>{
        this.props.onUpdateProduct(product , quantity);
        if(quantity>1){        
            this.props.onUpdateProductSuccess(MESS_UPDATE_SUCCESS);
        }
        
    }
    render() {
        let {cart,index} = this.props;
        let quantity = cart.quantity;
        
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
                   
                    <td className="center-on-small-only">
                        <span className="qty">{quantity}</span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label onClick={ ()=> this.onUpdate(cart.product , cart.quantity -1 )} className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <i class="fas fa-minus"></i>
                            </label>
                            <label onClick={ ()=> this.onUpdate(cart.product , cart.quantity +1 )}  className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <i class="fas fa-plus"></i>
                            </label>
                        </div>
                    </td>
                    <td>{cart.product.price * cart.quantity}$</td>
                    <td>
                        <button type="button" onClick={()=>this.onDelete(cart.product)} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item">
                            <i class="fas fa-trash-alt"></i>
                                        </button>
                    </td>
                </tr>
       
        );
    }
}

export default CartItem;
