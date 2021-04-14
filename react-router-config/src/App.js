import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./components/routes";
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
function App() {
  return (
  
      <BrowserRouter>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {switchRoutes}
      </BrowserRouter>

  );
}

export default App;
