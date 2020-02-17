import React from "react";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import PageBanner from "Components/Shared/PageBanner";
import { Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import walletMembership from "@iconify/icons-mdi/wallet-membership";
import walletGiftcard from "@iconify/icons-mdi/wallet-giftcard";

var serviceBanner = "/static/service/serviceBanner.png";

function Services(props) {
  return (
    <DefaultLayout crumbs="Services">
      <section className="contact-area pb-60">
        <PageBanner
          overlay
          title="SERVICING DETAILS & PRICING"
          bgImgUrl={serviceBanner}
        />
        <div className="container pb-5">
          <h3 className="text-center py-3">Car Servicing Details</h3>
          <div className="row align-content-center">
            <div className="col-md-6">Asian Cars</div>
            <div className="col-md-6">Continental Cars</div>
          </div>
        </div>
        <div className="container pb-5">
          <h3 className="text-center py-3">Services Provided</h3>
          <div className="row px-5 justify-content-center">
            <div className="col-md-4">
              <ul className="service-list">
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="service-list">
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
                <li>Regular Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <h3 className="text-center py-3">Earn & Redeem Membership Points</h3>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    <Icon height="70px" icon={walletMembership} />
                  </Card.Title>
                  <Card.Title className="text-center">
                    Earn Membership Points
                  </Card.Title>
                  <Card.Subtitle className="text-center pb-5">
                    How do I earn membership points through car servicing?
                  </Card.Subtitle>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <dt>Question</dt>
                      <dd>Answer</dd>
                    </li>
                    <li className="list-group-item">
                      <dt>Question</dt>
                      <dd>Answer</dd>
                    </li>
                    <li className="list-group-item">
                      <dt>Question</dt>
                      <dd>Answer</dd>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    <Icon height="70px" icon={walletGiftcard} />
                  </Card.Title>
                  <Card.Title className="text-center">
                    Redeem Membership Points
                  </Card.Title>
                  <Card.Subtitle className="text-center pb-5">
                    How do I redeem rewards using my membership points?
                  </Card.Subtitle>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <dt>Question</dt>
                      <dd>Answer</dd>
                    </li>
                    <li className="list-group-item">
                      <dt>Question</dt>
                      <dd>Answer</dd>
                    </li>
                    <li className="list-group-item">
                      <dt>Question</dt>
                      <dd>Answer</dd>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default Services;
