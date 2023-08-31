import React, { Component } from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
// import { MdOutlinePrivacyTip } from "react-icons";
import "./style.css";
import "./utils.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      hideId: "hide",
      toggleId: "toggleBtn",
      hideBtnId: "hideBtn",
      navChange: "navNoChange",
    };
  }
  showNav = () => {
    this.setState({
      hideId: "show",
      toggleId: "showToggleBtn",
      hideBtnId: "toggleBtn",
      navChange: "navChange",
    });
  };
  navNormal = () => {
    this.setState({
      hideId: "hide",
      toggleId: "toggleBtn",
      hideBtnId: "hideBtn",
      navChange: "navNoChange",
    });
  };
  render() {
    const { hideId, toggleId, hideBtnId, navChange } = this.state;
    return (
      <>
        <nav className="nav-bar max-width m-auto" id={navChange}>
          <div className="nav-left">
            <ul>
              <li>
                <a href="/">
                  {/* <MdOutlinePrivacyTip /> */}
                  Authentication
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div id={hideId}>
              <ul>
                <li>
                  {/* <button
                    
                    className="removeBtn"
                    
                  > */}
                  <FaTimes onClick={this.navNormal} id={toggleId} />
                  {/* </button> */}
                </li>
                <li>
                  <NavLink to='/'>
                    <FaHome Style="margin-top:2px" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login In</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <button id={hideBtnId} className="removeBtn"> */}
        <FaBars onClick={this.showNav} id={hideBtnId} />
        {/* </button> */}
      </>
    );
  }
}

export default Navbar;
