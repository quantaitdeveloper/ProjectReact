import { Component } from "react";

import QLSV from "./QLSV";
import Profile from "./about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

class Content extends Component {
  render() {
    
    function Home() {
      return (
        <div>
          <QLSV></QLSV>
        </div>
      );
    }

    function About() {
      return (
        <div>
          <Profile></Profile>
        </div>
      );
    }

    function Users() {
      return <h2>Users</h2>;
    }
    return (
      <div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-12 div-menu">
                {/* <nav>
                  <ul className="menu"><p>Tô Quân</p>
                    <li>
                      <Link to="/qlsv">Quản Lý Sinh Viên</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Contact</Link>
                    </li>
                  </ul>
                </nav> */}

                {/*menu*/}
                <Menu
                  onClick={this.handleClick}
                  style={{ width: 256 }}
                  
                 
                  mode="inline"
                >
                  <SubMenu
                    key="sub1"

                    icon={<AppstoreOutlined />}
                    title="Navigation One"
                  >
                    <Menu.ItemGroup key="g1" title="Item 1">
                      <Menu.Item key="1">
                        <Link to="/qlsv">Student Manage</Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/about">About</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                      <Menu.Item key="3">Option 3</Menu.Item>
                      <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<MailOutlined />}
                    title="Navigation Two"
                  >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                      <Menu.Item key="7">Option 7</Menu.Item>
                      <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    icon={<SettingOutlined />}
                    title="Navigation Three"
                  >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </Menu>
              </div>

              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-12 div-content">
              
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/qlsv">
                    <Home />
                  </Route>
             
              </div>
            </div>
          </div>
      
      </div>
    );
  }
}

export default Content;
