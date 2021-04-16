import { withRouter } from "react-router-dom";
import Navbar from "./Menu"

function Detail(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-12">
          <Navbar></Navbar>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-12  pt-10">
          <div>
            <h2>ID : {props.match.params.id}</h2>
            <h2>StudentID : {props.match.params.stdID}</h2>
            <h2>Name : {props.match.params.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Detail);
