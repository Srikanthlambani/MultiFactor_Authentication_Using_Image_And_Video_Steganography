import React, { Component } from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <label>&copy; Copyright Reseved by Team Authentication</label>
        <ul>
          <li>Follow Us on :</li>
          <li>
            <FaGoogle />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
