import { useHistory, Route, Switch } from "react-router-dom";
import Navbar from "./Menu";
import QLSV from "./QLSV";
import About from "./About";
import Routes from "./routes";
import Login from "./loginForm";
import React, {useEffect} from "react";



export default function Home() {
  
 
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-12">
          <Navbar></Navbar>
          
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-12">
          {/* <Switch>
            <Route path="/home/qlsv">
              <QLSV></QLSV>
            </Route>
            <Route path="/home/about">
              <About></About>
            </Route>
          </Switch> */}
        </div>
      </div>
    </div>
  );
}
