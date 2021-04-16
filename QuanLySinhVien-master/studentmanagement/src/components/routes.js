import Home from "./Home";
import About from "./About";
import NotFound from "./notFound";
import QLSV from "./QLSV";
import Login from "./loginForm";
import Detail from "./Detail";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
 
  {
    path: "/home",
    exact: true,
    component: Home,
    routes: [],
  },

  {
    path: "/home/qlsv",
    exact: false,
    component: QLSV,
  },
  {
    path: "/home/about",
    exact: false,
    component: About,
  },
  
  {
    path:"/detail/:id/:stdID/:name",
    exact:true,
    component: Detail
  }
  
 
];
export default Routes;
