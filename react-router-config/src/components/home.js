import {Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Routes from "./routes";

const switchRoutes = ( 
  
    <Switch>
      {Routes.map((route) => {
        return (
          <Route path={route.path} exact >
            <route.component />
          </Route>
        );
      })}
    </Switch>

);
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {switchRoutes}
    </div>
  );
}
