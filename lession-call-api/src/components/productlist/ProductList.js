import React, { Component } from 'react';
import ProductItem from '../productitem/ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-lg-12">
              <button className="btn btn-primary" >Thêm Sản Phẩm</button>
                <table class="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Trạng thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>           
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

export default ProductList;
