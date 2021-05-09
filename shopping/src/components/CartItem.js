import React, { Component } from 'react';
import { MESS_DELETE_SUCCESS } from '../constants/Message';


class CartItem extends Component {
    onDelete=(product)=>{
        let check = window.confirm("Xác Nhận Xóa ?");
        if(check===true){
            this.props.onDelete(product);
            
        }
        
    }
    render() {
        let {cartItem} = this.props;
        return (
           
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={cartItem.product.image} alt="" />
                        <div>
                            <p>{cartItem.product.name}</p>
                            <small> {cartItem.product.discription}</small><br></br>
                            <strong>Price $ {cartItem.product.price}</strong>
                            
                            <br />
                            <button className="btn-danger" onClick={()=>this.onDelete(cartItem.product)}>Remove</button>
                        </div>
                    </div>
                </td>
                <td><input type="number" defaultValue={cartItem.quantity}/></td>
                <td>${cartItem.product.price *cartItem.quantity}</td>
            </tr>

        );
    }
}

export default CartItem;
