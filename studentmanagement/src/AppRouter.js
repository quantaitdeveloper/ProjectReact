import "./App.css";
import { Component } from "react";
import Content from "./components/Admin";
import ViewDetail from "./components/ViewDetail";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

class AppRouter extends Component {
  render() {
    function QLSV() {
      let history = useHistory();
      let logout = () => {
        localStorage.removeItem("accessed");
        history.push("/");
      };
      return (
        <div style={{}}>
          <Content></Content>
          <button
            style={{ marginLeft: "30px" }}
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      );
    }

    function Login() {
      let history = useHistory();
      let login = () => {
        localStorage.setItem("accessed", true);
        history.replace("/admin");
      };
      return (
        <div>
          <div className="container">
            <section id="content">
              <form action>
                <h1>Login Form</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="username"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                  />
                </div>
                <div>
                  <input type="submit" defaultValue="Log in" onClick={login} />
                  <a href="#">Lost your password?</a>
                  <a href="#">Register</a>
                </div>
              </form>
              {/* form */}
            </section>
            {/* content */}
          </div>
        </div>
      );
    }

    return (
      <Router>
        <Switch>
          <Route
            path="/admin"
            render={() => {
              return localStorage.getItem("accessed") ? (
                <QLSV />
              ) : (
                <Redirect to="/login" />
              );
            }}
          ></Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login"></Redirect>;
            }}
          ></Route>
       
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
