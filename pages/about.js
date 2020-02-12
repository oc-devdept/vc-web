import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

// Components
import PageBanner from "Components/Shared/PageBanner";
import { Jumbotron, Container } from "react-bootstrap";

import { BannerInfo } from "Components/Layout/BannerInfo";

class AboutUs extends Component {
  render() {
    return (
      <DefaultLayout crumbs="About Us">
        <section className="about-area pb-60">
          <PageBanner title="About Us" bgImgUrl={BannerInfo[0].image} />
          <div
            className="container"
            style={{ paddingTop: 20, paddingBottom: 20, marginBottom: 28 }}
          >
            <h2 className="text-center" style={{ paddingBottom: 20 }}>
              THE COMPANY
            </h2>
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
              <div className="col-md-4">img</div>
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
            <Container>Our Values</Container>
          </Jumbotron>
        </section>
      </DefaultLayout>
    );
  }
}

export default AboutUs;
