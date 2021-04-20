import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./components/routes";
import Login from "./components/login";
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
   
          {Routes.map((route)=>{
            return <Route path={route.path} exact={route.exact} component={route.component}>

            </Route>
          })}
      </BrowserRouter>
    </div>
  );
}

export default App;
