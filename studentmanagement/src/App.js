import "./App.css";

import { Component } from "react";

import AppRouter from "./AppRouter"
import Sider from "./components/menu";

class App extends Component {
  
  render() {
   
    return (
       <div>
         <AppRouter></AppRouter>       
       </div>
     
    );
  }
}

export default App;
