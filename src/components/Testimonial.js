import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default class Testimonial extends Component {
  render() {
    return (
      /*  <!--  testimonial start  --> */
      <section className="testimonial-container mb-5 ">
        <h1>SUCCESS STORIES</h1>
        <h2>SUCCESS STORIES</h2>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <OwlCarousel className="owl-theme" loop margin={10}>
          <div id="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="pic">
                  <img
                    src={require("../assets/images/testimonial-1.png")}
                    alt=""
                  />
                </div>
                <h3 className="testimonial-title">
                  Angela Lindwal
                  <small>Local Name</small>
                </h3>
                <p className="description">
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  doloremque id obcaecati quasi quod suscipit vel voluptas.
                  Aliquid, aspernatur, beatae. "
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-image-container">
                <div className="row">
                  <div className="col-sm-6 col-6 pl-0 pr-0">
                    <div className="img-height">
                      <img
                        src={require("../assets/images/test-person-3.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-6 pl-0">
                    <div className="img-height">
                      <img
                        src={require("../assets/images/test-person-2.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="img-height">
                    <img
                      src={require("../assets/images/test-person-1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-content testimonial-middle">
                <div className="pic">
                  <img
                    src={require("../assets/images/testimonial-1.png")}
                    alt=""
                  />
                </div>
                <h3 className="testimonial-title">
                  Dan Philip
                  <small> Local Name</small>
                </h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  doloremque id obcaecati quasi quod suscipit vel voluptas.
                  Aliquid, aspernatur, beatae.
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="pic">
                  <img
                    src={require("../assets/images/testimonial-1.png")}
                    alt=""
                  />
                </div>
                <h3 className="testimonial-title">
                  Lekshmi Rai
                  <small>Local Name</small>
                </h3>
                <p className="description">
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  doloremque id obcaecati quasi quod suscipit vel voluptas.
                  Aliquid, aspernatur, beatae."
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="pic">
                  <img
                    src={require("../assets/images/testimonial-1.png")}
                    alt=""
                  />
                </div>
                <h3 className="testimonial-title">
                  Angela Lindwal
                  <small>Local Name</small>
                </h3>
                <p className="description">
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  doloremque id obcaecati quasi quod suscipit vel voluptas.
                  Aliquid, aspernatur, beatae. "
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-image-container">
                <div className="row">
                  <div className="col-sm-6 col-6 pl-0 pr-0">
                    <div className="img-height">
                      <img
                        src={require("../assets/images/test-person-3.png")}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-6 pl-0">
                    <div className="img-height">
                      <img
                        src={require("../assets/images/test-person-2.png")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="img-height">
                    <img src={require("../assets/images/test-person-1.png")} />
                  </div>
                </div>
              </div>
              <div className="testimonial-content testimonial-middle">
                <div className="pic">
                  <img
                    src={require("../assets/images/testimonial-1.png")}
                    alt=""
                  />
                </div>
                <h3 className="testimonial-title">
                  Dan Philip
                  <small> Local Name</small>
                </h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  doloremque id obcaecati quasi quod suscipit vel voluptas.
                  Aliquid, aspernatur, beatae.
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="pic">
                  <img
                    src={require("../assets/images/testimonial-1.png")}
                    alt=""
                  />
                </div>
                <h3 className="testimonial-title">
                  Lekshmi Rai
                  <small>Local Name</small>
                </h3>
                <p className="description">
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  doloremque id obcaecati quasi quod suscipit vel voluptas.
                  Aliquid, aspernatur, beatae."
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    );
  }
}
