import Navbar from "./Menu";

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: <Navbar></Navbar>,
    };
  }

  render() {
    return (
      <div>
        {() => this.props.render(this.state.menu)}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 ">
              {this.state.menu}
            </div>

            {/*end menu*/}
          </div>
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 qlsv"
              style={{ paddingTop: "20px" }}
            >
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
