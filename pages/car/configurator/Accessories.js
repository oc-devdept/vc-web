import React, { Component } from "react";

import { formatPrice } from "Components/Helpers/helpers";
import SummaryTable from "Components/configurator/SummaryTable";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class Accessories extends Component {
  constructor(props) {
    super(props);

    let accordionDisplay = { mainAccordionActiveKey: "0" };
    let optionsState = {};
    const { fields } = this.props.ProductAccessories.data[this.props.gradeId];
    Object.entries(fields).map(
      ([accessoryCategory, accessoryData], index) => {
        // If there is a default option available, pre-select the first one
        const selectedIndex = accessoryData.findIndex(
          element => element.isDefault
        );
        selectedIndex !== -1
          ? (accordionDisplay[index] = `${selectedIndex}`)
          : (accordionDisplay[index] = "0");

        let data = { values: {}, defaultAccessory: "" };
        accessoryData.forEach((accessory, indexx) => {
          if (indexx === selectedIndex) {
            data.values[accessory.productOptionId] = true;
            data.defaultAccessory = accessory.productOptionId;
          } else {
            data.values[accessory.productOptionId] = false;
          }
        });
        optionsState[accessoryCategory] = data;
      }
    );
    this.state = {
      accordionDisplay: accordionDisplay,
      optionsState: optionsState
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleClick = this.handleMainAccordionClick.bind(this);
  }

  componentDidMount() {
    this.props.selectedProductAccessories(this.state.optionsState);
  }

  // Updates selected product options
  componentDidUpdate(prevProps, prevState) {
    if (this.state.optionsState !== prevState.optionsState) {
      this.props.selectedProductAccessories(this.state.optionsState);
    }
  }

  handleOptionChange(event, category) {
    const { id, checked } = event.target;
    let resetCategoryState = {};
    Object.keys(this.state.optionsState[category].values).map(
      key => (resetCategoryState[key] = false)
    );
    if (checked) {
      resetCategoryState[id] = checked;
    } else {
      const defaultAccessory = this.state.optionsState[category]
        .defaultAccessory;
      resetCategoryState[defaultAccessory] = true;
    }
    this.setState({
      ...this.state,
      optionsState: {
        ...this.state.optionsState,
        [category]: {
          ...this.state.optionsState[category],
          values: resetCategoryState
        }
      }
    });
  }

  handleMainAccordionClick(id) {
    this.setState({
      ...this.state,
      accordionDisplay: {
        ...this.state.accordionDisplay,
        mainAccordionActiveKey: `${id}`
      }
    });
  }

  handleSecondaryAccordionClick(id, idd) {
    this.setState({
      ...this.state,
      accordionDisplay: {
        ...this.state.accordionDisplay,
        [id]: `${idd}`
      }
    });
  }

  render() {
    // console.log("state= ", this.state);
    // console.log("Accessories props= ", this.props);

    const { fields } = this.props.ProductAccessories.data[this.props.gradeId];

    return (
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8">
          {Object.keys(fields).length === 0 ? (
            <p>No accessories available for selection</p>
          ) : (
            <p>Expand the options below to view accessory details</p>
          )}
          <Accordion
            activeKey={this.state.accordionDisplay.mainAccordionActiveKey}
          >
            {Object.entries(fields).map(
              ([key, value], id) => (
                <Card
                  className="product-option-group"
                  key={id}
                  className="rounded-0 mb-2 border"
                >
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={`${id}`}
                    className="py-1 px-3 rounded-0"
                    style={{
                      backgroundColor: "#7da9bf",
                      borderColor: "#7da9bf"
                    }}
                    onClick={() => this.handleMainAccordionClick(id)}
                  >
                    <div className="row d-flex flex-row align-items-center">
                      <p
                        className="col-2 m-0"
                        style={{ fontWeight: 600, color: "#ffffff" }}
                      >
                        {id >= 9 ? (
                          <span>{id + 1}</span>
                        ) : (
                          <span>0{id + 1}</span>
                        )}
                      </p>
                      <p
                        className="col-9 m-0 text-center text-uppercase"
                        style={{ fontWeight: 600, color: "#ffffff" }}
                      >
                        {key}
                      </p>
                      <p
                        className="col-1 m-0"
                        style={{ fontWeight: 600, color: "#ffffff" }}
                      >
                        {this.state.accordionDisplay.mainAccordionActiveKey ===
                        `${id}` ? (
                          <i className="fas fa-minus" />
                        ) : (
                          <i className="fas fa-plus" />
                        )}
                      </p>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${id}`}>
                    <Card.Body className="p-0">
                      <Accordion activeKey={this.state.accordionDisplay[id]}>
                        {value.map((item, idd) => (
                          <Card key={idd} className="rounded-0">
                            <Accordion.Toggle
                              as={Card.Header}
                              eventKey={`${idd}`}
                              className="py-2 px-3"
                              style={{ backgroundColor: "transparent" }}
                              onClick={() =>
                                this.handleSecondaryAccordionClick(id, idd)
                              }
                            >
                              <div className="row d-flex flex-row align-items-center">
                                <div className="col-1">
                                  <Form.Check
                                    custom
                                    id={item.productOptionId}
                                    label=""
                                    checked={
                                      this.state.optionsState[key].values[
                                        item.productOptionId
                                      ]
                                    }
                                    onChange={event =>
                                      this.handleOptionChange(event, key)
                                    }
                                  />
                                </div>
                                <div className="col-7 p-0">
                                  <p
                                    style={{
                                      color: "#4B6674",
                                      textTransform: "uppercase"
                                    }}
                                  >
                                    {item.productOption.name}{" "}
                                    <span style={{ color: "#cccccc" }}>
                                      {this.state.optionsState[key]
                                        .defaultAccessory ===
                                        item.productOptionId && "(DEFAULT)"}
                                    </span>
                                  </p>
                                </div>
                                <div className="col-3">
                                  <p
                                    style={{
                                      fontWeight: 600,
                                      color: "#4B6674"
                                    }}
                                  >
                                    {formatPrice(item.productOption.price)}
                                  </p>
                                </div>
                                <div className="col-1">
                                  {this.state.accordionDisplay[id] ===
                                  `${idd}` ? (
                                    <i
                                      className="fas fa-chevron-up"
                                      style={{ color: "#4B6674" }}
                                    />
                                  ) : (
                                    <i
                                      className="fas fa-chevron-down"
                                      style={{ color: "#4B6674" }}
                                    />
                                  )}
                                </div>
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${idd}`}>
                              <div className="row my-3">
                                <div className="col-3">
                                  <div className="d-flex justify-content-center align-items-start ml-4">
                                    {/* <div style={{ marginTop: "75%" }} /> */}
                                    <img
                                      src={item.productOption.files[0].path}
                                      alt={item.productOption.name}
                                      style={{
                                        width: "100%",
                                        maxWidth: 200,
                                        borderRadius: 3
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-9">
                                  <div className="mr-4">
                                    <p>
                                      {item.productOption.description ===
                                      "undefined"
                                        ? "No description available"
                                        : item.productOption.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Collapse>
                          </Card>
                        ))}
                      </Accordion>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            )}
          </Accordion>
        </div>
        
      </div>
    );
  }
}

export default Accessories;

/*
<div className="configure-summary col-lg-4">
          <SummaryTable
            page="accessories"
            ProductState={this.props.ProductState}
          />
        </div>
*/
