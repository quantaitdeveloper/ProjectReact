import Navbar from "./Menu";
import {Link} from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-12">
            <Navbar></Navbar>
            <button className="btn btn-danger"><Link to="/login"  className="link">
            Logout
            </Link>
              
            </button>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-12">
            <div className="container-fluid about">
              <div className="row">
                <div className="col-lg-11 col-md-10 col-9 about-content" id={1}>
                  <h1 className="about-icon">
                    <i className="far fa-user-circle" />
                    <span className="about-title">about me</span>
                  </h1>
                  <div className="section-title center">
                    <h2>
                      <i>Services</i>
                    </h2>
                  </div>
                  <div className="col-lg-12 section-content">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          src="./image/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                        <p className="title-1">FULL STACK</p>
                        <p className="content-1">
                          I have ten years experience working as a full stack
                          developer. I am experience in font-end, back-end and
                          database technologies.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <img
                          src="./image/banking-domain-stock-vector.png"
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                        <p className="title-1">BANKING DOMAIN</p>
                        <p className="content-1">
                          I have two years working as an employee for a bank,
                          after that I have done many internet banking projects
                          for the banks in Vietnam.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <img
                          src="./image/client-website-management.jpg"
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                        <p className="title-1">MANAGEMENT</p>
                        <p className="content-1">
                          I write about web design. It is a long established
                          fact that a reader will be distracted by the readable
                          content.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <img
                          src="./image/8e9cf6d6ba15878ffdd614033d858e4d.jpg"
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                        <p className="title-1">PROBLEM SOLVER</p>
                        <p className="content-1">
                          I have strong project management skills. It is a long
                          established fact that a reader will be distracted by
                          the readable content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>Work-Process</i>
                    </h2>
                  </div>
                  <div className="col-lg-12 work-process">
                    <div className="col-lg-12 word-process-banner"></div>
                    <div className="row">
                      <div className="col-sm-2 col-xs-4 col-12">
                        <div className="process">
                          <i className="pe-7s-comment" />
                          <h4>DISCOVER</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4  col-12">
                        <div className="process">
                          <i className="pe-7s-light col-12" />
                          <h4>IDEA</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-vector" />
                          <h4>DESIGN</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-network" />
                          <h4>DEVELOP</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-browser" />
                          <h4>TEST</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-rocket" />
                          <h4>LAUNCH</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>Clients</i>
                    </h2>
                  </div>
                  <div className="row clients">
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="./image/y-nghia-cua-logo-tpbank.jpg">
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="./image/LogoEximbank4.jpg">
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className
                            alt
                            width="150px"
                            height="50px"
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="./image/lo-go-ngan-hang-bidv.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="./image/download.png">
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="./image/download (1).png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="./image/boeing-vector-logo.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row clients">
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="http://cuonglv.com/wp-content/uploads/2019/04/fpt.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="http://cuonglv.com/wp-content/uploads/2019/04/fsoft.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="http://cuonglv.com/wp-content/uploads/2019/04/logo_saltlux.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="http://cuonglv.com/wp-content/uploads/2019/04/msb.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="http://cuonglv.com/wp-content/uploads/2019/04/mb.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <a href="http://cuonglv.com/wp-content/uploads/2019/04/itsol.png">
                          {" "}
                          <img
                            src="./image/y-nghia-cua-logo-tpbank.jpg"
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>fun-fact</i>
                    </h2>
                  </div>
                  <div className="row col-fun">
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-map-2" />
                        </p>
                        <h4>24 Countries Visited</h4>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-news-paper" />
                        </p>
                        <h4>72 Articles Published</h4>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-coffee" />
                        </p>
                        <h4>20.000 Cups Of Coffee</h4>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-medal" />
                        </p>
                        <h4>12 Awards Won</h4>
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>other-pages</i>
                    </h2>
                  </div>
                  <div className="row other-pages" id={404}>
                    <div className="col-lg-12 other-page-items">
                      <button>404</button>
                      <button>Blog</button>
                      <button>form-elements</button>
                      <button>grid</button>
                      <button>shortcodes</button>
                      <button>typographys</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
