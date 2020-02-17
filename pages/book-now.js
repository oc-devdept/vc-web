import React from "react";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import PageBanner from "Components/Shared/PageBanner";

var bookNowBanner = "/static/service/booknowBanner.png";

function BookNow(props) {
  return (
    <DefaultLayout crumbs="Book a service">
      <section className="contact-area pb-60">
        <PageBanner
          overlay
          title="BOOK A CAR SERVICING WITH US TODAY"
          bgImgUrl={bookNowBanner}
        />

        <div className="container">Form here</div>
      </section>
    </DefaultLayout>
  );
}

export default BookNow;
