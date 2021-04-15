import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./components/routes";
import Login from "./components/login";


function App() {
  return (
    <div>
<BrowserRouter>
<Login></Login>    
</BrowserRouter>
    </div>
      
      

   

  );
}

export default App;
