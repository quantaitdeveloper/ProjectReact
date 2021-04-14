import "./App.css";

import { Component } from "react";

import QLSV from "./components/QLSV";
import Login from "./components/loginForm";
import NotFound from "./components/notFound";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const Routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/home",
    exact: false,
    component: Home,
    routes: [
      {
        path: "/qlsv",
        component: QLSV,
      },
      {
        path: "/about",
        component: About,
      },
    ],
  },

  {
    path: "/",
    exact: true,
    component: NotFound,
  },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        {Routes.map((route) => {
          console.log(route);
          return (
            <Route
              path={route.path}
              exact={route.exact}
              render={() => {
                return localStorage.getItem("access") ? (
                  <route.component />
                ) : (
                  <Login></Login>
                );
              }}
            ></Route>
          );
        })}
      </BrowserRouter>
    </div>
  );
}

export default App;
