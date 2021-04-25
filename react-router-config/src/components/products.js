import { Component } from "react";

export default class Product extends Component{
    constructor(props) {
        super(props);
        this.state={
          products: [
           
          ]
        }
      }
      componentDidMount(){
          fetch("https://607e8b3402a23c0017e8b875.mockapi.io/products")
          .then(response => response.json())
          .then((data) => {
              this.setState({
                  products :data,
              })
          })
      }
      render(){
          let {products} = this.state;
        return (
            <div className="container">
              <div className="row">
                {
                    products.map((product,index)=>{
                        return <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 product-item" key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                       {product.description}
                      </p>
                      <h4 style={{color:"red"}}>{product.price}</h4>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                    })
                }
                
              </div>
            </div>
          );
      }
  
}
