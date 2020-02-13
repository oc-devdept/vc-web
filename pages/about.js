import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

// Components
import PageBanner from "Components/Shared/PageBanner";
import { Jumbotron, Container } from "react-bootstrap";
import Testimonials from "Components/Common/Testimonials";

var aboutusBanner = "/static/about-us/aboutus-banner.png";
var aboutusPic = "/static/about-us/aboutus-1.png";
var testimonialBanner = "/static/about-us/testimonial-banner.png";

class AboutUs extends Component {
  render() {
    return (
      <DefaultLayout crumbs="About Us">
        <section className="about-area pb-60">
          <PageBanner overlay title="About Us" bgImgUrl={aboutusBanner} />
          <div className="container py-5 mb-5">
            <h2 className="text-center pb-5">THE COMPANY</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mi
              a tellus porttitor lacinia sed nec quam. Praesent ac lobortis dui,
              sit amet rutrum dolor. Duis in quam nisl. Donec commodo metus at
              semper hendrerit. Suspendisse urna sapien, consequat malesuada
              magna sed, commodo malesuada odio. Fusce sit amet lorem lacus.
              Curabitur sed dolor elementum, volutpat massa non, rutrum nibh.
              Curabitur iaculis sem et molestie finibus.
            </p>
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src={aboutusPic} />
              </div>
              <div className="col-md-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at mi a tellus porttitor lacinia sed nec quam. Praesent ac
                  lobortis dui, sit amet rutrum dolor. Duis in quam nisl. Donec
                  commodo metus at semper hendrerit. Suspendisse urna sapien,
                  consequat malesuada magna sed, commodo malesuada odio. Fusce
                  sit amet lorem lacus. Curabitur sed dolor elementum, volutpat
                  massa non, rutrum nibh.
                </p>
                <p>
                  Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                  volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                  molestie finibus. Donec eu egestas magna. Aenean molestie nibh
                  lacus, vitae placerat justo dictum sit amet. Fusce viverra
                  tincidunt leo, in ultricies lacus pharetra ac. In malesuada
                  malesuada magna vitae cursus. Ut maximus at tortor id pretium.
                  Morbi a elit justo.
                </p>
              </div>
            </div>
          </div>
          <Jumbotron fluid>
            <Container>
              <h2 className="text-center pb-5">OUR VALUES</h2>
              <div className="row align-items-center mb-5">
                <div className="col-md-3 text-center">
                  <i
                    className="far fa-star pb-5"
                    style={{ fontSize: "3rem" }}
                  />
                  <h5>QUALITY</h5>
                </div>
                <div className="col-md-9">
                  <p>
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus. Donec eu egestas magna. Aenean molestie
                    nibh lacus, vitae placerat justo dictum sit amet.
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-md-3 text-center">
                  <i
                    className="far fa-handshake pb-5"
                    style={{ fontSize: "3rem" }}
                  />
                  <h5>TRUST</h5>
                </div>
                <div className="col-md-9">
                  <p>
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus. Donec eu egestas magna. Aenean molestie
                    nibh lacus, vitae placerat justo dictum sit amet.
                  </p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-md-3 text-center">
                  <i
                    className="far fa-smile pb-5"
                    style={{ fontSize: "3rem" }}
                  />
                  <h5>SATISFACTION</h5>
                </div>
                <div className="col-md-9">
                  <p>
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus. Donec eu egestas magna. Aenean molestie
                    nibh lacus, vitae placerat justo dictum sit amet.
                  </p>
                </div>
              </div>
            </Container>
          </Jumbotron>
          <Container className="py-5">
            <h2 className="text-center">OUR SERVICES</h2>
            <div className="row">
              <div className="col-md-3">
                <div>
                  icon
                  <h5 className="text-center">Sell</h5>
                  <p className="text-center">
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  icon
                  <h5 className="text-center">Rent</h5>
                  <p className="text-center">
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  icon
                  <h5 className="text-center">Repairs</h5>
                  <p className="text-center">
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  icon
                  <h5 className="text-center">Compare</h5>
                  <p className="text-center">
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus.
                  </p>
                </div>
              </div>
            </div>
          </Container>

          <Container fluid>
            <div
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${testimonialBanner})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: 300
              }}
              className="row py-5 align-items-center"
            >
              <div className="col-12 py-3 text-center">
                <h2 className="text-white">WHY CHOOSE US</h2>
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-sm-10">
                <div className="row text-center mt-n5">
                  <div className="col-sm pb-5">
                    <div className="card h-100 shadow">
                      <Testimonials />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <Container className="py-5">
            <h2 className="text-center">OUR ACCOLADES</h2>
            <div className="row">
              <div className="col-md-4">
                <div>
                  icon
                  <h5 className="text-center">Award 1</h5>
                  <p className="text-center">
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  icon
                  <h5 className="text-center">Award 2</h5>
                  <p className="text-center">
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  icon
                  <h5 className="text-center">Award 3</h5>
                  <p className="text-center">
                    Fusce sit amet lorem lacus. Curabitur sed dolor elementum,
                    volutpat massa non, rutrum nibh. Curabitur iaculis sem et
                    molestie finibus.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </DefaultLayout>
    );
  }
}

export default AboutUs;
