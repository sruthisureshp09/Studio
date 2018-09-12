import React from "react";

const Contact = () => {
  return (
    /*  <!-- contact start --> */
    <section className="contact" id="contact">
      <div className="container">
        <h1>REACH US</h1>
        <h2>REACH US</h2>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="row">
          <div className="col-sm-6 col-12">
            <div className="row">
              <div className="col-auto text-center flex-column d-none d-sm-flex">
                <div className="row h-50">
                  <div className="col">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <img src={require("../assets/images/pin.png")} alt="" />
                </h5>
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col">
                <div className="card address1">
                  <div className="card-body p-0">
                    <p className="pb-0">
                      T7523, 3rd Block
                      <br /> MC Road, Muthoot Plaza,
                      <br /> Whitefield , Bangalore.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-auto text-center flex-column d-none d-sm-flex">
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <img src={require("../assets/images/pin.png")} alt="" />
                </h5>
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col">
                <div className="card address1">
                  <div className="card-body p-0">
                    <p className="pb-0">
                      Athulya Road,
                      <br /> MC Road, Pinarmunda,
                      <br /> Infopark Short Road.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-auto text-center flex-column d-none d-sm-flex">
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <img src={require("../assets/images/24-hours.png")} alt="" />
                </h5>
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col">
                <div className="card address2">
                  <div className="card-body p-0">
                    <p className="pb-0">
                      <span>M +91</span>
                      987456321 &nbsp;&nbsp;&nbsp;
                      <span>L +91</span>
                      4587456321
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-auto text-center flex-column d-none d-sm-flex">
                <div className="row h-50">
                  <div className="col border-right">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
                <h5 className="m-2">
                  <img src={require("../assets/images/arroba.png")} alt="" />
                </h5>
                <div className="row h-50">
                  <div className="col">&nbsp;</div>
                  <div className="col">&nbsp;</div>
                </div>
              </div>
              <div className="col">
                <div className="card address2">
                  <div className="card-body p-0">
                    <p className="pb-0">ultimatepicture@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="contact-box">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">NAME</label>
                  <input
                    type="text"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">MOBILE</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Contact"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">MESSAGE</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter Your Message"
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="button-style">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    /* <!-- contact end --> */
  );
};

export default Contact;
