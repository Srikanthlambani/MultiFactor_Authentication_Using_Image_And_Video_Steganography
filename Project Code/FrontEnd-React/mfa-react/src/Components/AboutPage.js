import React, { Component } from "react";
import "./about.css";
import Footer from "./Footer";
import aboutImage from "./Images/about.jpg";
import pic2 from "./Images/pic2.jpg";
import pic4 from "./Images/pic4.jpg";
import pic5 from "./Images/pic5.jpg";
import Navbar from "./Navbar";

class AboutPage extends Component {
  render() {
    return (
      <>
      <Navbar />

      <div id="aboutMain">
        <div id="whiteSpace"></div>
        <div id="aboutImg">
          <img src={aboutImage} alt="Not Found" />
        </div>
        <section className="aboutSection">
          <h4 className="header">Heading here</h4>
          <div className="aboutContent">
            <div>
              <img src={pic2} alt="Not Found" />
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
        <section className="aboutSection">
          <h4 className="header">Heading here</h4>
          <div className="aboutContent">
            <div>
              <img src={pic4} alt="Not Found" />
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

export default AboutPage;
