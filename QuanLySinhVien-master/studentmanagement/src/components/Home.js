import { useHistory, Route, Switch } from "react-router-dom";
import Navbar from "./Menu";
import QLSV from "./QLSV";
import About from "./About";
import Routes from "./routes";
import Login from "./loginForm";

export default function Home() {
  let history = useHistory();
  let logout = () => {
    localStorage.removeItem("access");
    history.push("/login");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-12">
          <Navbar></Navbar>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-12">
          <Switch>
            <Route path="/qlsv">
              <QLSV></QLSV>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
