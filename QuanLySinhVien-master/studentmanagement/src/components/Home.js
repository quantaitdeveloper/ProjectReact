import { useHistory, Route, Switch } from "react-router-dom";
import Navbar from "./Menu";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <Navbar></Navbar>
        </div>
        <div className="col-lg-12">
          <h1 > Welcome to My Web</h1>
        </div>
      </div>
    </div>
  );
}
