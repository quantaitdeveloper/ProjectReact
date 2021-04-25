import { Link, NavLink } from "react-router-dom";
import { Route, Switch } from "react-router";
import Routes from "./routes";
import { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: ["home", "product", "services","contact"],
    };
  }

  onActive = (menuitem) => {
    document.getElementById(menuitem).style.color = "red";
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="header">
              <h2 className="logo">DarkCode</h2>
              <input type="checkbox" id="chk" />
              <label htmlFor="chk" className="show-menu-btn">
                <i className="fas fa-ellipsis-h" />
              </label>
              <ul className="menu">
               
                {this.state.menus.map((menuitem) => {
                  return (
                    <NavLink
                      to={"/" + menuitem}
                      activeStyle={{
                      
                        color: "#3498db",
                      }}
                    >
                      {menuitem}
                    </NavLink>
                  );
                })}

                <label htmlFor="chk" className="hide-menu-btn">
                  <i className="fas fa-times" />
                </label>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
