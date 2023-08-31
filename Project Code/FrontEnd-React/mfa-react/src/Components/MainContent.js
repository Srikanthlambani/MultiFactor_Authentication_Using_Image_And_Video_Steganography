import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import LoginForm from "./LoginForm";
import "./MainContent.css";
import pic5 from "./Images/pic5.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginFormFunc from "./LoginFormFunc";

class MainContent extends Component {
  render() {
    return (
      <>
      <Navbar />
      <div className="mainContent">
        <div className="contentBlocks">
          <div id="heading">
            <h3 className="heading">Hi there . . .</h3>
            <span id="typeWriter">
              <Typewriter
                options={{
                  strings: [
                    "Do you think your data is secured ?",
                    "Want to Secure your data . .",
                    "That's why we are here . .  ",
                    "Secure Your Data  here . . .",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 55,
                }}
              />
            </span>
          </div>
          <div id="hideLogin">
            <LoginFormFunc ele="main2" ele2="index2" />
          </div>
        </div>
        <section className="aboutSection">
          <h4 className="header">Heading here</h4>
          <div className="aboutContent">
            <div>
              <img src={pic5} alt="Not Found" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              aspernatur cum fugiat natus error molestiae, ab perspiciatis
              temporibus accusantium voluptates, nulla consequuntur
              exercitationem! Voluptate corrupti, esse ad saepe ullam illo
              doloribus repellendus! Tempora porro tenetur explicabo iure
              perferendis eveniet eaque rem, blanditiis inventore deleniti ex
              amet quisquam molestiae minima, et quidem laudantium? Nam et
              assumenda vero repellendus omnis officiis modi laudantium sunt
              delectus, ea ducimus. Tempora, officiis ea nesciunt magni
              aspernatur ex itaque qui tenetur omnis minima eveniet, eligendi
              doloribus eaque sed doloremque reprehenderit voluptate placeat
              consectetur culpa ipsa! Nulla, fuga sapiente dolor ex eos
              assumenda rem eum in?
            </div>
          </div>
        </section>
      </div>
      <Footer />
      </>
    );
  }
}

export default MainContent;
