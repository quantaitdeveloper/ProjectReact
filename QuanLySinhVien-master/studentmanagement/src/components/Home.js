
import Navbar from "./Menu";

import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      navbar : <Navbar></Navbar>
    }
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
                {this.props.render(this.state.navbar)}
          </div>
          <div className="col-lg-12">
            <h1 > Welcome to My Web</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
