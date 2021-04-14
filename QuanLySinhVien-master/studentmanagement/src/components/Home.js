import { useHistory } from "react-router";
import Navbar from "./Menu";
import QLSV from "./QLSV";

export default function Home(){
    let history =useHistory();
    let logout=()=>{
        localStorage.removeItem("access");
        history.push("/login");
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-12">
                    <Navbar></Navbar>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-12">
                    <QLSV></QLSV>
                </div>
            </div>
            
        </div>
    )
}