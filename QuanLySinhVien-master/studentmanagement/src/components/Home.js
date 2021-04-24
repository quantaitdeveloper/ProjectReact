
import Navbar from "./Menu";

export default function Home(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
              {props.menu}
        </div>
        <div className="col-lg-12">
          <h1 > Welcome to My Web</h1>
        </div>
      </div>
    </div>
  );
}
