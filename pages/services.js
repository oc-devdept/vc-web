import React from "react";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import PageBanner from "Components/Shared/PageBanner";

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
        <div className="container">
          <h3 className="text-center">Car Servicing Details</h3>
          <div className="row align-content-center">
            <div className="col-md-6">Asian Cars</div>
            <div className="col-md-6">Continental Cars</div>
          </div>
          <div className="row">
            <div className="col-md-6">
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
      </section>
    </DefaultLayout>
  );
}

export default Services;
