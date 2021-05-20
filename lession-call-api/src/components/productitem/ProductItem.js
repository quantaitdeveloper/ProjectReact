import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td scope="row">1</td>
        <td>IP</td>
        <td>IP Xs Max</td>
        <td>1200$</td>
        <td>
          <span class="badge badge-success">Success</span>
        </td>
        <td>
          <button className="btn btn-danger">Sửa</button>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
