import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import PageTitle from "./PageTitle";

function PageBanner(props) {
  const { title, caption, bgImgUrl, overlay } = props;
  console.log(bgImgUrl);
  return (
    <Jumbotron
      className="d-flex align-items-center text-center"
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        background:
          overlay &&
          `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 400,
        zIndex: 1
      }}
      fluid
    >
      <Container>
        <PageTitle title={title} caption={caption} />
      </Container>
    </Jumbotron>
  );
}

export default PageBanner;
