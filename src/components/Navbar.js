import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item"
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                marginRight: "15px"
              }}
              title="Logo"
            >
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
              Educator Emily
              <div style={{
                position: "absolute",
                top: "52px",
                width: "220px",
                color: "black",
                fontSize: "14px",
                fontStyle: "italic",
                fontWeight: "normal",
                backgroundColor: "white",
                opacity: "0.7",
                padding: "5px 10px"
              }}>homeschool coach and teacher</div>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/coaching">
                Coaching
              </Link>
              <Link className="navbar-item" to="/teaching">
                Teaching
              </Link>
              {/* <Link className="navbar-item" to="/resources">
                Resources
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link> */}
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
