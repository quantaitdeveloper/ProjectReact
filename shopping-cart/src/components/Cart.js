import React, { Component } from 'react';

import CartResult from './CartResult';

class Cart extends Component {
    render() {
       
        return (
            <div>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table" >
                            <thead >
                                <tr >
                                    <th style={{textAlign:'center'}}>STT</th>
                                    <th style={{textAlign:'center'}}>Ảnh Sản Phẩm</th>
                                    <th style={{textAlign:'center'}}>Tên Sản Phẩm</th>
                                    
                                    <th style={{textAlign:'center'}}>Số Lượng</th>
                                    
                                    <th style={{textAlign:'center'}}>Tổng Cộng</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                       
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

export default Cart;
