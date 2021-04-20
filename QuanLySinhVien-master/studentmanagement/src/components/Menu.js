import { Button, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, NavLink, useHistory } from "react-router-dom";



export default function Navbar() {
  let history = useHistory();

  let logout = () => {
    localStorage.removeItem("access");
    history.push("/login");
  };
  
  return (
    <div>
      <div className="header">
        <Link to="/home"><h2 className="logo">Team 3</h2></Link>
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-ellipsis-h" />
        </label>
        <ul className="menu">
          <NavLink to="/home/qlsv" activeStyle={{color:'#3498db'}} >Student Manage</NavLink>
          <NavLink to="/home/about" activeStyle={{color:'#3498db'}} > About Me</NavLink>
          <a href="#">Services</a>
          <a href="#">Works</a>
          <Button className="btn btn-success" onClick={logout}>Log Out</Button>
          <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times" />
          </label>
        </ul>
      </div>

      {/*end navbar*/}
  
    </div>
  );
}
