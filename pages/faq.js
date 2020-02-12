import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Page Layout
import DefaultLayout from "Components/Layout/PageTemplates/Default";

class Faq extends Component {
  render() {
    return (
      <DefaultLayout>
        <section className="faq-area  pb-60">
          <div className="container">
            <div className="section-title">
              <h2> Frequently Asked Questions</h2>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div className="row">
                <div className="col-3">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="col-9">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              Click me!
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="1"
                            >
                              Click me!
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>test2</div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

export default Faq;
