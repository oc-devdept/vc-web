import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import PageTitle from "./PageTitle";

function PageBanner(props) {
  const { title, caption, bgImgUrl } = props;
  return (
    <Jumbotron
      className="d-flex align-items-center text-center"
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        minHeight: 400
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
