import React from "react";
import { Tab, Nav, Accordion, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";

// FAQ Data
import { FaqData } from "Components/faq/data";

// Page Layout
import DefaultLayout from "Components/Layout/PageTemplates/Default";

function Faq(props) {
  return (
    <DefaultLayout crumbs="FAQ">
      <section className="faq-area  pb-60">
        <div className="container">
          <div className="section-title">
            <h2> Frequently Asked Questions</h2>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <div className="row">
              <div className="col-3">
                <Nav variant="tabs" className="flex-column">
                  {FaqData.map((faq, key) => (
                    <Nav.Item key={key}>
                      <Nav.Link style={{ padding: 15 }} eventKey={key}>
                        <Icon height="35px" icon={faq.icon} /> {faq.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
              <div className="col-9">
                <Card>
                  <Tab.Content>
                    {FaqData.map((faq, index) => (
                      <Tab.Pane eventKey={index} key={index}>
                        <div className="row align-items-start py-5">
                          <div className="col-md-2 text-center">
                            <Icon height="35px" icon={faq.icon} />
                          </div>
                          <div className="col-md-10">
                            <h3>{faq.title}</h3>
                            <p>{faq.description}</p>
                          </div>
                        </div>

                        <Accordion defaultActiveKey={0}>
                          {faq.questions.length > 0 &&
                            faq.questions.map((question, indx) => (
                              <Card key={indx}>
                                <Accordion.Toggle
                                  as={Card.Header}
                                  eventKey={indx}
                                  style={{ padding: 20 }}
                                >
                                  <h6>{question.question}</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={indx}>
                                  <Card.Body>
                                    <p>{question.answer}</p>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            ))}
                        </Accordion>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Card>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default Faq;
