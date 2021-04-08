import "./App.css";

import { Component } from "react";

import QLSV from "./components/QLSV";
import Profile from "./components/about"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
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
            <Router>
              <div className="container-fluid">
              <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-12 div-menu">
                <nav>
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
                </nav>
              </div>
             
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-12 div-content">
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/qlsv">
                    <Home />
                  </Route>
                </Switch>
              </div>
              </div>          
            </div> 
            </Router>
      </div>
       
     
    );
  }
}

export default App;
